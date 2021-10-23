-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-10-2021 a las 07:55:07
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `todofime`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `description` varchar(256) NOT NULL,
  `createdDate` datetime NOT NULL DEFAULT current_timestamp(),
  `completed` tinyint(4) NOT NULL,
  `logicalErase` tinyint(4) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tasks`
--

INSERT INTO `tasks` (`id`, `description`, `createdDate`, `completed`, `logicalErase`, `userId`) VALUES
(75, 'Crear servidor', '2021-10-23 00:18:46', 1, 0, 1),
(76, 'ccc', '2021-10-23 00:18:50', 1, 1, 1),
(77, 'Crear bd', '2021-10-23 00:18:53', 1, 0, 1),
(78, 'Crear UI', '2021-10-23 00:19:00', 1, 0, 1),
(79, 'Agregar logica a UI', '2021-10-23 00:20:01', 1, 0, 1),
(80, 'Aprobar la materia :(', '2021-10-23 00:20:22', 0, 0, 1),
(81, 'Seleccione una fila ;)', '2021-10-23 00:20:57', 0, 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `typeregistration`
--

CREATE TABLE `typeregistration` (
  `id` int(11) NOT NULL,
  `description` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `typeregistration`
--

INSERT INTO `typeregistration` (`id`, `description`) VALUES
(1, 'System'),
(2, 'Google');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `userName` varchar(30) NOT NULL,
  `name` varchar(40) DEFAULT NULL,
  `password` varchar(300) NOT NULL,
  `profilePicture` varchar(300) DEFAULT NULL,
  `typeRegistrationId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `userName`, `name`, `password`, `profilePicture`, `typeRegistrationId`) VALUES
(1, 'jperez', 'Jose Luis Perez Olguin', '123', NULL, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `typeregistration`
--
ALTER TABLE `typeregistration`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT de la tabla `typeregistration`
--
ALTER TABLE `typeregistration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
