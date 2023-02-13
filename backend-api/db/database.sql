-- Archivo principal para ejecutar en consola de MySQL
--    mysql mariaDB version 15.1
--    NOTA:
--       -Acceder antes a consola de MySQL a la correspondiente
--       ingresando user y password
--          COPIAR TODO A PARTIR DE LINEA 9
--       ejemplo: mysql -u root -p123456

CREATE DATABASE IF NOT EXISTS usuariosdb;

USE usuariosdb;

CREATE TABLE `usuarios` ( 
   `id` INT(11) NOT NULL AUTO_INCREMENT ,
   `nombre` VARCHAR(255) NULL,
   `mail` VARCHAR(100) NULL,
   `edad` INT(3) NULL,
   PRIMARY KEY (`id`)
);

INSERT INTO `usuarios` VALUES
   (1, 'Luis', 'contact@luisromerobarbosa.com',19),
   (2, 'Enrique', 'contact1@ejemplo.com',20),
   (3, 'Usuario3', 'contact2@ejemplo.com',21),
   (4, 'Usuario4', 'contact3@ejemplo.com',22);

SELECT * FROM usuarios;