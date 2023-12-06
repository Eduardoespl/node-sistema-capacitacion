CREATE DATABASE IF NOT EXISTS capacitacion;

USE capacitacion;

CREATE TABLE trabajadores (
    id_trabajador INTEGER NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    fk_id_puesto INTEGER NOT NULL,
    cursos_completos INTEGER NOT NULL,
    PRIMARY KEY (id_trabajador),
    FOREIGN KEY (fk_id_puesto) REFERENCES puestos(id_puesto)
)

CREATE TABLE cursos (
    id_curso INTEGER NOT NULL AUTO_INCREMENT,
    fk_id_categoria INTEGER NOT NULL,
    nombre TIME NOT NULL,
    aptitud TIME NOT NULL,
    PRIMARY KEY (id_curso),
    FOREIGN KEY (fk_id_categoria) REFERENCES categorias(id_categoria)
)

CREATE TABLE categorias (
    id_categoria INTEGER NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_categoria)
)

CREATE TABLE puestos (
    id_puesto INTEGER NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_puesto)
)

CREATE TABLE vacantes (
    id_vacante INTEGER NOT NULL AUTO_INCREMENT,
    fk_id_puesto INTEGER NOT NULL,
    fk_id_curso INTEGER NOT NULL,
    PRIMARY KEY (id_vacante),
    FOREIGN KEY (fk_id_puesto) REFERENCES puestos(id_puesto),
    FOREIGN KEY (fk_id_curso) REFERENCES cursos(id_curso)
)
