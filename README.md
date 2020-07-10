# Python-Flask-Angular-1 app

Frontend and Backend are separated.

## Database

Start postgres server in some shell that you aren't going to close.

```bash
# install postgres then
sudo service postgresql start

# reference commands
sudo su
su - postgres
create user interactive
psql
CREATE DATABASE onlineexam
```

Add roles

```bash
sudo -u postgres createuser --interactive # esna0001
sudo -u postgres createdb esna0001 # esna0001
```

Set password

```
ALTER USER esna0001 PASSWORD 'mypass';
```

Reconnect later

```
psql
```

Create table example:

```bash
CREATE TABLE playground (
    equip_id serial PRIMARY KEY,
    type varchar (50) NOT NULL,
    color varchar (25) NOT NULL,
    location varchar(25) check (location in ('north', 'south', 'west', 'east', 'northeast', 'southeast', 'southwest', 'northwest')),
    install_date date
);

INSERT INTO playground (type, color, location, install_date) VALUES ('slide', 'blue', 'south', '2017-04-28');

SELECT * from playground;
```

Create local postgres connection (DBeaver on Windows) with following info:

* Port: 5432
* User: esna0001
* Database: esna0001
* Password: mypass

## Frontend

To build the frontend, use ``cd frontend && npm install``.
To run the frontend, use ``npm start``.

## Backend

To setup venv use ``cd backend && pipenv install`` and then activate the environment with ``pipenv shell``.
Run the backend with ``flask run``.

## Info

API is running on port 5000 and frontend is aware of this.
Database is running on Port 

