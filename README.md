## Inserción de datos de prueba (Postman)

Para generar e insertar datos de prueba en la base de datos se debe utilizar **Postman** 

### Endpoint
**POST**


http://localhost:8080/api/mocks/generateData

### Headers
Content-Type: application/json
### Body (raw JSON)
Como Ejemplo

{
  "users": 2,
  "pets": 2
}

## Para Mostrar mascotas 

Para mostras mascotas se debe utilizar **Postman** 
### Endpoint
**GET**

http://localhost:8080/api/pets

## Para mostrar usuarios 

Para mostras mascotas se debe utilizar **Postman** 
### Endpoint
**GET**

http://localhost:8080/api/users



## Para generar 50 usuarios  

Para mostras mascotas se debe utilizar **Postman** 
### Endpoint
**GET**

http://localhost:8080/api/mocks/mockingusers

## Para generar 100 mascotas   

Para mostras mascotas se debe utilizar **Postman** 
### Endpoint
**GET**

http://localhost:8080/api/mocks/mockingpets# trabajofinalcoder
