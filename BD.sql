CREATE DATABASE empleadobd

USE empleadobd


CREATE TABLE tbl_empleado (
 id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 nombre VARCHAR(255) NOT NULL,
 apellido VARCHAR(255) NOT NULL,
 email VARCHAR(255) NOT NULL,
 createdAt DATE NOT NULL
);

-- insert into tbl_empleado (nombre,apellido,email,createdat) values ('william','sorto','william.sorto.alv@gmail.com', NOW())
-- insert into tbl_empleado (nombre,apellido,email,createdat) values ('jose','perez','jose.perez@gmail.com', NOW())
-- insert into tbl_empleado (nombre,apellido,email,createdat) values ('jane','doe','jane.doe@gmail.com',NOW())


SELECT * FROM tbl_empleado