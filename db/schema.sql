DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
id int(10) auto_increment primary key,
burger_name varchar(100),
devoured boolean
) 