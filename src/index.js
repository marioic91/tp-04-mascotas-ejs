const { leerArchivoJSON } = require('./archivos.js');
const path = require('node:path');
const express = require('express');
const PORT = 3000;
const expressLayouts = require('express-ejs-layouts');

const rutaDatos = path.join(__dirname, '..', 'datos', 'mascotas.json');

async function main() {
    try {
        //const mascotas = [];
        const mascotas = await leerArchivoJSON(rutaDatos);
        //console.log('Mascotas:', mascotas);
        const app = express();
        app.set("view engine", "ejs");
        app.set("views", path.join(__dirname, "..", "views"));
        app.use(expressLayouts);
        app.set("layout", "layouts/main");
        app.use(express.static(path.join(__dirname, "..", "public")));
        app.use(express.urlencoded({ extended: false }));

        app.get("/", (req, res) => {
            res.render("inicio", { titulo: "Página de Inicio" });
        });
        app.get("/mascotas", (req, res) => {
            res.render("mascotas/lista", { titulo: "Mascotas en Adopción", mascotas: mascotas });
        });
        app.get("/mascotas/nueva", (req, res) => {
            res.render("mascotas/nueva", {
                titulo: "Agregar Nueva Mascota",
                error: null,
                valores: {},
            });
        });

        app.get("/mascotas/:id", (req, res) => {
            const id = Number(req.params.id);
            const mascota = mascotas.find((elemento) => elemento.id === id);
            if (!mascota) {
                return res.status(404).render("mascotas/no-encontrado", {
                    titulo: "Mascota no encontrada",
                    mensaje: "No se encontro la mascota.",
                });
            }
            res.render("mascotas/detalle", {
                titulo: mascota.nombre,
                mascota,
            });
        });

        app.post("/mascotas", (req, res) => {
            const { nombre, especie, raza, edad, estado, descripcion } = req.body;
            const nombreLimpio = String(nombre ?? "").trim();
            const especieLimpia = String(especie ?? "").trim();
            const razaLimpia = String(raza ?? "").trim();
            const descripcionLimpia = String(descripcion ?? "").trim();
            const edadNumerica = Number(edad);
            if (
                !nombreLimpio ||
                !especieLimpia ||
                !razaLimpia ||
                !Number.isFinite(edadNumerica) ||
                edadNumerica < 0
            ) {
                return res.status(400).render("mascotas/nueva", {
                    titulo: "Nueva mascota",
                    error: "Completá todos los campos con valores válidos.",
                    valores: req.body,
                });
            }
            const ultimoId = mascotas.reduce(
                (mayorId, mascota) => Math.max(mayorId, mascota.id),
                0,
            );
            mascotas.push({
                id: ultimoId + 1,
                nombre: nombreLimpio,
                especie: especieLimpia,
                raza: razaLimpia,
                edad: edadNumerica,
                estado: estado,
                descripcion: descripcionLimpia,
            });
            res.redirect("/mascotas");
        });

        app.listen(PORT, () => {
            console.log(`Servidor escuchando en http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error('Error al leer el archivo JSON:', error);
    }
}

main();