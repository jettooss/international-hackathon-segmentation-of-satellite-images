###
Установите базу Postgres.   
Для создание базы данных введите следующие команды
###
    sudo -u postgres psql
    create user bankgis with password 'bankGIS';
    create database roaddb;
    grant all privileges on database bankgis to bankgis;
    ALTER ROLE roaddb SUPERUSER;
    \c roaddb;
    CREATE EXTENSION postgis;
    \q

###
Для запуска сервера.
###
    python -m venv venv
    source venv/bin/activate 
       or
    venv\Scripts\activate # для windows

    pip install -r requirements.txt
    python manage.py runserver --settings=backend.settings.local
###

Админка
###
    username: admin
    password: 301522
###

SWAGGER
###
    http://127.0.0.1:8000/api/swagger/#
###