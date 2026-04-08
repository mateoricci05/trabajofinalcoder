- Entrega Final


## 🚀 Tecnologías utilizadas

* Node.js
* Express
* MongoDB (Mongoose)
* Swagger (Documentación API)
* Docker
* Testing con Supertest

---

## 📁 Estructura del proyecto

```
src/
 ├── routes/
 │   ├── users.router.js
 │   ├── pets.router.js
 │   ├── adoption.router.js
 │   ├── sessions.router.js
 │   └── mocks.router.js
 ├── docs/
 │   └── users.yaml
 └── app.js
```

---

## 📌 Funcionalidades principales

* Gestión de usuarios
* Gestión de mascotas
* Sistema de adopciones
* Manejo de sesiones
* Generación de datos mock

---

## 📖 Documentación API (Swagger)

La documentación de endpoints se encuentra disponible en:

👉 http://localhost:3001/api/docs

Incluye:

* Endpoints de Users completamente documentados
* Métodos GET, POST, PUT y DELETE
* Parámetros y respuestas

---

## 🧪 Testing

Se implementaron tests funcionales para el módulo de adopciones utilizando Supertest.

Para ejecutar los tests:

```
npm test
```

---

## 🐳 Docker

🔹 Construir imagen

```
docker build -t adoptme .
```

🔹 Ejecutar contenedor

```
docker run -p 3001:3001 adoptme
```

---

## ⚙️ Instalación y ejecución

1. Clonar repositorio
2. Instalar dependencias:

```
npm install
```

3. Ejecutar servidor:

```
npm start
```

---

## 🎯 Objetivo académico

Este proyecto cumple con los requisitos de la entrega final:

* ✔ Documentación completa del módulo Users
* ✔ Tests funcionales del router adoption
* ✔ Dockerización del proyecto
* ✔ API estructurada siguiendo buenas prácticas

---

## 👨‍💻 Autor

Mateo Ricci
