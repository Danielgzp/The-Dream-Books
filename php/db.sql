CREATE TABLE IF NOT EXISTS `usuarios`(

	`id` int(10) NOT NULL AUTO_INCREMENT,
	`nombre` varchar(40) NOT NULL,
	`apellido` varchar(40) NOT NULL,
	`edad` int(2) NOT NULL,
	`fecha_nacimiento` DATE NOT NULL,
	`pais` varchar(20) NOT NULL,
	`correo` varchar(50) NOT NULL,
	`clave` varchar(50) NOT NULL,
	`privilegio` varchar(20) NOT NULL,
	`fecha_cuenta` DATETIME NOT NULL,
	PRIMARY KEY(`id`) 

)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `edad`, `fecha_nacimiento`, `pais`, `correo`, `clave`, `privilegio`, `fecha_cuenta`) 
VALUES 
(1, 'Administrador', '', '', '0000-00-00 00:00:00', '', 'admin@admin.com', '12345678', 'administrador', '0000-00-00 00:00:00');