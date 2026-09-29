Claro. Para el **TP 04**, te preparo el `README.md` siguiendo la estructura y los requisitos de la consigna, y manteniendo el nivel de la Semana 4: **Express + EJS + vistas dinámicas + layouts + formularios + validaciones**. 

# Trabajo práctico 04

## Descripción

Este proyecto consiste en una aplicación web desarrollada con **Node.js, Express y EJS** para gestionar y visualizar un catálogo de mascotas en adopción.

La aplicación utiliza vistas dinámicas para mostrar la información de las mascotas y un layout compartido para mantener una estructura común entre las diferentes páginas.

El proyecto permite:

* Visualizar una página de inicio.
* Consultar el catálogo de mascotas disponibles para adopción.
* Consultar el detalle de una mascota.
* Crear nuevas mascotas mediante un formulario.
* Validar los datos enviados desde el formulario.
* Mostrar mensajes de error cuando los datos ingresados no son válidos.
* Mantener una estructura visual compartida mediante un layout.

---

## Instalación

Para instalar las dependencias del proyecto, primero se debe clonar el repositorio y acceder a su carpeta raíz.

Luego ejecutar:

```bash
npm install
```

Este comando instala las dependencias declaradas en `package.json`.

Entre las dependencias utilizadas por el proyecto se encuentra **Express**, junto con las herramientas necesarias para trabajar con las vistas EJS y el layout de la aplicación.

---

## Ejecución

Para iniciar la aplicación se debe ejecutar:
```bash
npm start
```

Una vez iniciado el servidor, se puede acceder a la aplicación desde el navegador utilizando:
```text
http://localhost:3000
```

La página principal se encuentra disponible en:
```text
GET /
```

Para detener el servidor se puede utilizar:
```text
Ctrl + C
```

---

## Estructura del proyecto

```text
tp-04-express-ejs/
│
├── datos/
│   └── mascotas.json
│
├── public/
│   └── ...
│
├── src/
│   ├── archivos.js
│   └── index.js
│
├── views/
│   ├── layouts/
│   │   └── main.ejs
│   │
│   ├── inicio.ejs
│   │
│   └── mascotas/
│       ├── lista.ejs
│       ├── detalle.ejs
│       ├── nueva.ejs
│       └── no-encontrado.ejs
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

### Archivos principales

* **`src/index.js`**: configura Express, define las rutas y coordina la aplicación.
* **`src/archivos.js`**: se encarga de las operaciones relacionadas con los datos almacenados en archivos.
* **`datos/mascotas.json`**: contiene la información inicial de las mascotas.
* **`views/inicio.ejs`**: contiene el contenido específico de la página de inicio.
* **`views/mascotas.ejs`**: muestra el catálogo de mascotas.
* **`views/detalle.ejs`**: muestra la información detallada de una mascota.
* **`views/nueva.ejs`**: contiene el formulario para registrar una nueva mascota.
* **`views/layouts/main.ejs`**: contiene la estructura común de las páginas.
* **`public/css/estilos.css`**: contiene los estilos utilizados por la aplicación.

---

## Vistas y rutas

### Página de inicio

```text
GET /
```

Muestra la página principal de la aplicación.

La ruta utiliza `res.render()` para renderizar la vista `inicio.ejs` y enviarle los datos necesarios para mostrar el título de la página.

---

### Catálogo de mascotas

```text
GET /mascotas
```

Muestra el listado de mascotas disponibles para adopción.

La información se obtiene a partir de los datos almacenados y se envía a la vista para generar dinámicamente el contenido HTML.

---

### Detalle de una mascota

```text
GET /mascotas/:id
```

Permite consultar la información de una mascota específica utilizando su identificador.

El identificador se obtiene mediante un parámetro de ruta y se utiliza para localizar la mascota correspondiente.

---

### Formulario de nueva mascota

```text
GET /mascotas/nueva
```

Muestra el formulario que permite ingresar los datos de una nueva mascota.

---

### Crear una mascota

```text
POST /mascotas
```

Recibe los datos enviados desde el formulario y realiza las validaciones correspondientes.

Si los datos son correctos, se crea la nueva mascota y se incorpora al conjunto de datos.

Si existen errores de validación, se vuelve a mostrar el formulario junto con los mensajes correspondientes.

---

## Formularios y validaciones

El formulario de alta permite ingresar la información necesaria para registrar una mascota.

Los datos enviados mediante `POST` son procesados por Express y se validan antes de crear el nuevo registro.

La aplicación contempla situaciones en las que:

* Faltan campos obligatorios.
* Los datos enviados no cumplen con las condiciones esperadas.
* La mascota no puede ser creada debido a información inválida.

Cuando existe un error, el usuario recibe información que permite identificar el problema y corregir los datos ingresados.

---

## Vistas dinámicas con EJS

La aplicación utiliza **EJS** para generar HTML dinámicamente a partir de los datos proporcionados por Express.

Las rutas utilizan `res.render()` para indicar qué vista debe procesarse y qué información debe recibir.

Por ejemplo:

```js
res.render("inicio", {
    titulo: "Mascotas en adopción"
});
```

La vista puede utilizar el valor recibido mediante:

```ejs
<h1><%= titulo %></h1>
```

De esta manera, los datos enviados desde el servidor se incorporan al HTML generado.

---

## Layout

La aplicación utiliza un layout compartido para evitar repetir la estructura HTML común en todas las vistas.

El archivo:

```text
views/layouts/main.ejs
```

contiene los elementos generales de la aplicación, como la estructura HTML, el encabezado, la navegación y el pie de página.

Las vistas individuales contienen solamente el contenido específico de cada página.

Esto permite mantener una estructura consistente y reducir la repetición de código.

---

## Persistencia de los datos

La información inicial de las mascotas se encuentra almacenada en:

```text
datos/mascotas.json
```

La aplicación trabaja con estos datos para generar las diferentes vistas.

Cuando se registra una nueva mascota mediante el formulario, los datos se procesan desde el servidor.

La persistencia utilizada por el proyecto corresponde al mecanismo indicado en la consigna y no utiliza una base de datos externa.

---

## Tecnologías utilizadas

* **Node.js**: entorno de ejecución utilizado para ejecutar JavaScript en el servidor.
* **Express**: framework utilizado para crear el servidor HTTP y definir las rutas.
* **EJS**: motor de plantillas utilizado para generar las vistas dinámicas.
* **HTML**: estructura de las páginas.
* **CSS**: estilos visuales de la aplicación.
* **NPM**: administrador de paquetes utilizado para gestionar las dependencias del proyecto.

---

Claro. Para el TP 04, estas respuestas conviene redactarlas relacionándolas con **tu propia aplicación de mascotas**, para demostrar que entendés cómo funcionan y no solamente repetir definiciones.

## Consultas teóricas

### 1. Diferencia entre layout, vista y parcial

Una **vista** es una plantilla EJS que contiene el contenido específico de una página. En este proyecto, por ejemplo, `inicio.ejs`, `mascotas/lista.ejs`, `mascotas/detalle.ejs` y `mascotas/nueva.ejs` son vistas diferentes.

El **layout** contiene la estructura general y compartida de las páginas, como la estructura HTML, el encabezado, la navegación y el pie de página. En este proyecto se encuentra en `views/layouts/main.ejs` y se utiliza mediante `express-ejs-layouts`. De esta manera, no es necesario repetir la misma estructura en cada vista.

Un **parcial** es una plantilla más pequeña que contiene una parte reutilizable de la interfaz, por ejemplo, un menú, una tarjeta de mascota o un mensaje. A diferencia del layout, un parcial representa solamente una parte de la página y puede ser incluido dentro de diferentes vistas.

En resumen, la **vista** contiene el contenido particular de una página, el **layout** define la estructura general compartida y el **parcial** permite reutilizar componentes más pequeños.

---

### 2. Datos enviados a una vista mediante `res.render`

`res.render()` permite renderizar una plantilla EJS y enviarle datos desde Express para que puedan utilizarse al generar el HTML.

Por ejemplo, en la página de inicio:

```js
res.render("inicio", {
    titulo: "Página de Inicio"
});
```

La propiedad `titulo` queda disponible dentro de la vista y puede utilizarse mediante EJS:

```ejs
<h1><%= titulo %></h1>
```

También se pueden enviar objetos o arreglos completos. En el listado de mascotas, por ejemplo, se envían tanto el título como el arreglo de mascotas:

```js
res.render("mascotas/lista", {
    titulo: "Mascotas en Adopción",
    mascotas: mascotas
});
```

De esta manera, la vista puede utilizar esos datos para generar el contenido dinámicamente.

---

### 3. Función de `express.static`

`express.static` permite servir archivos estáticos de la aplicación, como archivos CSS, imágenes o archivos JavaScript del navegador.

En este proyecto se configura de la siguiente manera:

```js
app.use(express.static(path.join(__dirname, "..", "public")));
```

Esto indica que Express debe buscar los archivos estáticos dentro de la carpeta `public`.

Por ejemplo, si dentro de `public` existe un archivo CSS, el navegador puede solicitarlo y Express se encarga de entregarlo.

Su función principal es permitir que los recursos estáticos utilizados por las vistas sean accesibles desde el navegador.

---

### 4. Función de `express.urlencoded`

`express.urlencoded` es un middleware que permite a Express interpretar los datos enviados mediante formularios HTML utilizando el formato `application/x-www-form-urlencoded`.

En este proyecto se utiliza:

```js
app.use(express.urlencoded({ extended: false }));
```

Gracias a este middleware, los datos enviados desde el formulario de nueva mascota pueden ser obtenidos mediante `req.body`.

Por ejemplo:

```js
const { nombre, especie, raza, edad, estado, descripcion } = req.body;
```

Sin este middleware, Express no podría interpretar correctamente los datos enviados por este tipo de formulario.

---

### 5. Recorrido POST, redirección y GET

Cuando el usuario completa el formulario para agregar una mascota, el navegador realiza una solicitud `POST` a:

```text
/mascotas
```

La ruta recibe los datos mediante `req.body` y primero realiza las validaciones correspondientes.

Si los datos son incorrectos, la aplicación vuelve a renderizar el formulario mostrando el mensaje de error y conservando los valores enviados.

Si los datos son válidos, se crea un nuevo objeto mascota, se le asigna un nuevo ID y se agrega al arreglo en memoria mediante `push()`.

Después se realiza una redirección:

```js
res.redirect("/mascotas");
```

El navegador realiza entonces una nueva solicitud `GET` a `/mascotas`.

La ruta `GET /mascotas` obtiene el arreglo actualizado y renderiza nuevamente la vista del listado, mostrando la mascota recién agregada.

El recorrido puede resumirse de la siguiente manera:

```text
Formulario
    ↓
POST /mascotas
    ↓
Validación
    ↓
Agregar mascota al arreglo
    ↓
res.redirect("/mascotas")
    ↓
GET /mascotas
    ↓
Renderizar listado actualizado
```

La redirección permite separar la creación del recurso de la posterior consulta del listado.

---

### 6. Motivo por el cual el nuevo registro desaparece al reiniciar

Las nuevas mascotas se agregan únicamente al arreglo `mascotas` que se encuentra en memoria:

```js
mascotas.push({
    id: ultimoId + 1,
    nombre: nombreLimpio,
    especie: especieLimpia,
    raza: razaLimpia,
    edad: edadNumerica,
    estado: estado,
    descripcion: descripcionLimpia,
});
```

Aunque los datos iniciales se obtienen desde `datos/mascotas.json`, el `POST` no modifica ni vuelve a escribir ese archivo.

Por lo tanto, la nueva mascota existe solamente mientras el proceso de Node.js está ejecutándose.

Cuando el servidor se detiene y vuelve a iniciarse, se ejecuta nuevamente:

```js
const mascotas = await leerArchivoJSON(rutaDatos);
```

Esto vuelve a cargar el contenido original de `mascotas.json` y se pierde cualquier mascota que hubiera sido agregada solamente en memoria.

Por este motivo, el nuevo registro desaparece después de reiniciar el servidor: **no existe una persistencia permanente de los datos agregados**.
