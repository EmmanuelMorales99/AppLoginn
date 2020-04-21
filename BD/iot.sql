drop database if exists iot;
create database if not exists iot;
use iot;

drop table if exists usuario;
create table if not exists usuario(
usuario varchar(30) not null,
pass varchar(30) not null,
correo varchar(60) not null)
Engine=InnoDB;
desc usuario;

insert into usuario values("morales","159753","morales.villagran2911@gmail.com");