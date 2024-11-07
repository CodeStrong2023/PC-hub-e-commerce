@echo off

:: Solicitar nombre de usuario y contraseña de PostgreSQL
set /p PGUSER=Ingrese el nombre de usuario de PostgreSQL (por defecto: root): 
set /p PGPASSWORD=Ingrese la contraseña del usuario %PGUSER% (por defecto: admin): 

:: Establecer valores por defecto si no se ingresan
if "%PGUSER%"=="" set PGUSER=root
if "%PGPASSWORD%"=="" set PGPASSWORD=admin

:: Configurar archivo .env
(
echo HOST=0.0.0.0
echo PORT=1337

echo.
echo # Database
echo DATABASE_CLIENT=postgres
echo DATABASE_HOST=localhost
echo DATABASE_PORT=5432
echo DATABASE_NAME=ecommerce-PCHUB
echo DATABASE_USERNAME=%PGUSER%
echo DATABASE_PASSWORD=%PGPASSWORD%
echo DATABASE_SSL=false

echo.
echo # Secrets
echo APP_KEYS=hyhgd5mM9RJXkHqAP5BSyg==,9A0E3hJOomwh3Ym6EKdxPw==,MiKYf5CFcJ0beLyW8o3V1A==,7hO5vmhyiubfMi/hALAmgw==
echo API_TOKEN_SALT=WM6Rr+PL7vXp+D4YU/26CA==
echo ADMIN_JWT_SECRET=R85ZNQ8F1q7I/5UFn8J/3A==
echo TRANSFER_TOKEN_SALT=ozAPDtQeVOH8GJtTehfiHw==

echo.
echo # Storage
echo DATABASE_FILENAME=.tmp/data.db
) > .env

echo Archivo .env configurado correctamente.

:: Crear base de datos, ignorando errores si ya existe
call psql -U %PGUSER% -d postgres -c "CREATE DATABASE \"ecommerce-PCHUB\"" > nul 2>&1 || echo Error al crear base de datos, continuando...

:: Pausa breve para asegurar que la base de datos esté lista
call ping localhost -n 3 > nul || echo Error al conectar a la base de datos, continuando...

:: Conectar a la base de datos creada e ignorar errores
call psql -U %PGUSER% -d ecommerce-PCHUB -c "SELECT 1" > nul 2>&1 || echo Error al conectar a la base de datos, continuando...

:: Descargar backup de base de datos desde Google Drive
call curl -L -v -o db_backup.sql "https://drive.google.com/uc?export=download&id=1lI1ZHsVU6-mKspYwTd-IMZGI-M2ihDDq" || echo Error al descargar backup de base de datos, continuando...

:: Restaurar backup de base de datos
call pg_restore -U %PGUSER% -d ecommerce-PCHUB -c db_backup.sql || echo Error al restaurar backup de base de datos, continuando...

:: Instalar dependencias de Strapi
call npm install --force || echo Error al instalar dependencias de Strapi, continuando...

:: Construir proyecto Strapi
call npm run build || echo Error al construir proyecto Strapi, continuando...

:: Reconstruir proyecto Strapi
call npx strapi build --clean || echo Error al reconstruir proyecto Strapi, continuando...

:: Iniciar Strapi
call npm run start || echo Error al iniciar Strapi, continuando...

echo Ejecucion finalizada.