-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-06-2023 a las 14:55:23
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ambienteeducativo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

CREATE TABLE `alumno` (
  `idAlumno` char(10) NOT NULL,
  `nivel` char(30) NOT NULL,
  `seccion` char(2) NOT NULL,
  `idApoderado` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`idAlumno`, `nivel`, `seccion`, `idApoderado`) VALUES
('5618', '4° Básico', 'B', '0000010982');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno_clase`
--

CREATE TABLE `alumno_clase` (
  `idAlumno` char(10) NOT NULL,
  `idClase` char(50) NOT NULL,
  `estaPresente` tinyint(1) NOT NULL,
  `observacion` text DEFAULT NULL,
  `nota_evaluacion` int(5) DEFAULT NULL,
  `tipo_evaluacion` char(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `alumno_clase`
--

INSERT INTO `alumno_clase` (`idAlumno`, `idClase`, `estaPresente`, `observacion`, `nota_evaluacion`, `tipo_evaluacion`) VALUES
('5618', '8912', 0, NULL, NULL, NULL),
('5618', '8934', 1, NULL, NULL, NULL),
('5618', '9001', 1, NULL, 70, 'Prueba'),
('5618', '9500', 1, NULL, 58, 'Prueba');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `apoderado`
--

CREATE TABLE `apoderado` (
  `idApoderado` char(10) NOT NULL,
  `telefono` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `apoderado`
--

INSERT INTO `apoderado` (`idApoderado`, `telefono`) VALUES
('0000010982', '956123401');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clase`
--

CREATE TABLE `clase` (
  `idClase` char(50) NOT NULL,
  `fecha` date NOT NULL,
  `codCurso` char(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clase`
--

INSERT INTO `clase` (`idClase`, `fecha`, `codCurso`) VALUES
('8912', '2024-03-04', 'MAT07-B'),
('8934', '2024-03-04', 'LEN07-B'),
('9001', '2024-03-25', 'MAT07-B'),
('9500', '2024-04-28', 'MAT07-B');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso`
--

CREATE TABLE `curso` (
  `codCurso` char(50) NOT NULL,
  `nombre` char(100) NOT NULL,
  `periodo` char(50) NOT NULL,
  `idDocente` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `curso`
--

INSERT INTO `curso` (`codCurso`, `nombre`, `periodo`, `idDocente`) VALUES
('LEN07-B', 'Lenguaje y Comunicación 4° Básico', '2024', '19762'),
('MAT07-B', 'Matemáticas 4° Básico', '2024', '12456');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `docente`
--

CREATE TABLE `docente` (
  `idDocente` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `docente`
--

INSERT INTO `docente` (`idDocente`) VALUES
('12456'),
('19762');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horario`
--

CREATE TABLE `horario` (
  `idHorario` char(20) NOT NULL,
  `dia` char(20) NOT NULL,
  `horaInicio` time NOT NULL,
  `horaFin` time NOT NULL,
  `codCurso` char(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `horario`
--

INSERT INTO `horario` (`idHorario`, `dia`, `horaInicio`, `horaFin`, `codCurso`) VALUES
('345', 'Lunes', '08:15:00', '09:45:00', 'MAT07-B'),
('346', 'Martes', '10:00:00', '11:30:00', 'MAT07-B'),
('347', 'Jueves', '08:15:00', '09:45:00', 'MAT07-B'),
('348', 'Lunes', '10:00:00', '11:30:00', 'LEN07-B'),
('349', 'Martes', '08:15:00', '09:45:00', 'LEN07-B'),
('350', 'Jueves', '11:30:00', '13:00:00', 'LEN07-B');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipousuario`
--

CREATE TABLE `tipousuario` (
  `idTipo` int(3) NOT NULL,
  `tipo` char(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipousuario`
--

INSERT INTO `tipousuario` (`idTipo`, `tipo`) VALUES
(1, 'Alumno'),
(2, 'Docente'),
(3, 'Administrador'),
(4, 'Apoderado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` char(10) NOT NULL,
  `nombre` char(150) NOT NULL,
  `rut` char(20) NOT NULL,
  `password` text NOT NULL,
  `email` char(150) NOT NULL,
  `direccion` char(200) NOT NULL,
  `idTipo` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `nombre`, `rut`, `password`, `email`, `direccion`, `idTipo`) VALUES
('0000000022', 'Nicolás Mauricio Acuña Órdenes', '20.881.821-K', 'jHop123$', 'nicolas.acuna.o@mail.pucv.cl', 'Libertad 12345, Viña del mar', 3),
('0000005618', 'Ignacio Trigo Hidalgo', '24.567.890-8', 'Hola123!', 'email@example.com', 'Los lirios 123, Valparaíso', 1),
('0000010982', 'Mónica Macarena Hidalgo Astudillo', '13.451.980-0', 'MoM!hllo10', 'monica.hidalgo32@gmail.com', 'Los lirios 123, Valparaíso', 4),
('12456', 'Héctor Miranda Ríos', '15.623.091-K', 'Hec89!rDjn$', 'hector0mirios@outlook.com', 'Avenida libertad 4568, Viña del Mar', 2),
('19762', 'Juana Maria Lagos Olmedo', '8.912.531-6', 'juanaM123$', 'juanamaria.lagos7@gmail.com', 'Los tulipanes 567, Quilpué', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`idAlumno`),
  ADD KEY `foreign_key_id_Apoderado` (`idApoderado`);

--
-- Indices de la tabla `alumno_clase`
--
ALTER TABLE `alumno_clase`
  ADD PRIMARY KEY (`idAlumno`,`idClase`),
  ADD KEY `foreign_key_idClase` (`idClase`);

--
-- Indices de la tabla `apoderado`
--
ALTER TABLE `apoderado`
  ADD PRIMARY KEY (`idApoderado`);

--
-- Indices de la tabla `clase`
--
ALTER TABLE `clase`
  ADD PRIMARY KEY (`idClase`),
  ADD KEY `foreign_key_codCurso` (`codCurso`);

--
-- Indices de la tabla `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`codCurso`),
  ADD KEY `foreign_key_id_Docente` (`idDocente`);

--
-- Indices de la tabla `docente`
--
ALTER TABLE `docente`
  ADD PRIMARY KEY (`idDocente`);

--
-- Indices de la tabla `horario`
--
ALTER TABLE `horario`
  ADD KEY `foreign_key_cod` (`codCurso`);

--
-- Indices de la tabla `tipousuario`
--
ALTER TABLE `tipousuario`
  ADD PRIMARY KEY (`idTipo`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`),
  ADD KEY `foreign_key_idTipo` (`idTipo`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD CONSTRAINT `foreign_key_id_Apoderado` FOREIGN KEY (`idApoderado`) REFERENCES `apoderado` (`idApoderado`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `alumno_clase`
--
ALTER TABLE `alumno_clase`
  ADD CONSTRAINT `foreign_key_idAlumno` FOREIGN KEY (`idAlumno`) REFERENCES `alumno` (`idAlumno`),
  ADD CONSTRAINT `foreign_key_idClase` FOREIGN KEY (`idClase`) REFERENCES `clase` (`idClase`);

--
-- Filtros para la tabla `apoderado`
--
ALTER TABLE `apoderado`
  ADD CONSTRAINT `foreign_key_idApoderado` FOREIGN KEY (`idApoderado`) REFERENCES `usuario` (`idUsuario`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `clase`
--
ALTER TABLE `clase`
  ADD CONSTRAINT `foreign_key_codCurso` FOREIGN KEY (`codCurso`) REFERENCES `curso` (`codCurso`);

--
-- Filtros para la tabla `curso`
--
ALTER TABLE `curso`
  ADD CONSTRAINT `foreign_key_id_Docente` FOREIGN KEY (`idDocente`) REFERENCES `docente` (`idDocente`);

--
-- Filtros para la tabla `docente`
--
ALTER TABLE `docente`
  ADD CONSTRAINT `foreign_key_idDocente` FOREIGN KEY (`idDocente`) REFERENCES `usuario` (`idUsuario`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `horario`
--
ALTER TABLE `horario`
  ADD CONSTRAINT `foreign_key_cod` FOREIGN KEY (`codCurso`) REFERENCES `curso` (`codCurso`);

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `foreign_key_idTipo` FOREIGN KEY (`idTipo`) REFERENCES `tipousuario` (`idTipo`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
