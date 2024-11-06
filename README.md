# Informe de pasos para descargar y ejecutar el proyecto en otra máquina


## Requisitos previos

1. Tener Git instalado en la máquina.
2. Tener Node.js y npm instalados en la máquina.
3. Tener PostgreSQL instalado en la máquina.


## Pasos para descargar y ejecutar el proyecto


### #1. Clonar el repositorio
git clone <url-del-repositorio>

### #2. Ejecutar archivo BAT
init.bat


### #4. Esperar a que termine la ejecución
El archivo BAT realizará las siguientes acciones:
* Creará la base de datos.
* Descargará el backup de la base de datos.
* Restaurará la base de datos.
* Instalará dependencias de Strapi.
* Construirá el proyecto Strapi.
* Iniciará Strapi.

### Descarcar el sigueinte archivo rar que contiene las imagenes y descompirmir en:
e-commerce_PCHub/public/uploads

https://drive.google.com/file/d/1-myIb-lNmPfz2roUTMKgbJT1p4olQsxe/view?usp=drive_link

estas son todas las imagenes del proyecto

### #5. Iniciar sesión en Strapi
ir a la terminal y dirigirse hasta la carpeta e-commerce_PCHub y ahi ejecutar npm run develop
esperar hasta que renderice por completo 
Dirigirse a http://localhost:1337/admin en el navegador.
Iniciar sesión con el correo y contraseña configurados.
correo : helloworld@gmail.com
contraeña : Utn12345



### #6. Verificar la configuración
Verificar que la base de datos esté configurada correctamente.
Verificar que Strapi esté funcionando correctamente.


### #7. Abrir el frontend
ir a la terminal y dirigirse hasta la carpeta frontend-ecommerce y ahi ejecutar npm run dev
esperar hasta que renderice por completo 
Dirigirse a http://localhost:3000 en el navegador para acceder al frontend.


### #8. Realizar ajustes necesarios
Realizar ajustes en la configuración si es necesario.
Verificar los logs de Strapi y PostgreSQL.


### #9. Listo para usar
El proyecto estará ejecutándose y listo para usar.


## Notas adicionales
Asegúrate de que la configuración de PostgreSQL esté correcta.
Verifica que los archivos BAT estén configurados correctamente.
Si encuentras algún error, verifica los logs de Strapi y PostgreSQL.
