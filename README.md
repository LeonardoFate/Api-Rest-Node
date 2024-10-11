# Node API - Gestion de producto

Esta API en Node.js gestiona productos y esta construida con una estructura organizada.
Incluye controladores, rutas y una conexion a la base de datos.

## Estructura del Proyecto
```bash
   - src/
   - controller/         # Contiene la lógica de negocio para manejar los productos.
      - products.controller.js
   - database/           # Maneja la conexión a la base de datos.
      - connection.js
   - routes/             # Contiene todas las rutas de la API para productos.
      - products.routes.js
   - app.js              # Configuración principal de la aplicación.
   - index.js            # Punto de entrada de la API.
```
## instalacion
1. Clona el repositorio:
 ```bash
  git clone  https://github.com/LeonardoFate/Api-Rest-PruebaTecnica
```
2. Navega al directorio del proyecto:
```
cd Api-Rest-PruebaTecnica-main
```

3. Instala las dependencias:
```
npm i
```
4. Configura las variables de entorno: 
```
DB_HOST=localhost
DB_USER=sa
DB_PASSWORD=tu_contraseña
DB_NAME=tu_base_de_datos
```
5. Ejecuta la aplicación:
```
npm run dev
```
6. La API estará corriendo en http://localhost:3000.

# Endpoints de la API
## GET /api/productos
Muestra los producto 
![image](https://github.com/user-attachments/assets/4f35fd6a-d93d-41d8-836e-95cdc2100dbb)
## /api/productos/id
Muestra por producto
![image](https://github.com/user-attachments/assets/19db675f-d3e4-41c3-b7ed-7d845591ec30)

## POST /api/productos/id
Crea un nuevo producto.
![image](https://github.com/user-attachments/assets/485dab1d-1e77-44f6-a0e6-84b6c18172ea)


## PUT /api/productos/id
Actualiza un producto existente por ID.
![image](https://github.com/user-attachments/assets/287d3c7b-b23d-4aa5-af45-96072b973c6c)

## DELETE /api/productos/id
Elimina un producto por ID.
![image](https://github.com/user-attachments/assets/f1fdf657-af4b-44e7-8276-9db4b5c92031)


# Tecnologías
- Node.js
- Express.js
- SQL Server 



![image](https://github.com/user-attachments/assets/ff7d26eb-f30c-4b3c-a245-39a753917c44)




