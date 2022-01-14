-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 11-01-2022 a las 16:13:36
-- Versión del servidor: 5.7.24
-- Versión de PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bookusers`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `authors`
--

CREATE TABLE `authors` (
  `id_author` int(11) NOT NULL,
  `author` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `books`
--

CREATE TABLE `books` (
  `id_book` int(11) NOT NULL,
  `book_image` text NOT NULL,
  `book_name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `download` text NOT NULL,
  `price` double NOT NULL,
  `upload_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id_category` int(11) NOT NULL,
  `category` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories_books`
--

CREATE TABLE `categories_books` (
  `id_category` int(11) NOT NULL,
  `id_book` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `authors_books`
--

CREATE TABLE `authors_books` (
  `id_author` int(11) NOT NULL,
  `id_book` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `purchase`
--

CREATE TABLE `purchase` (
  `id_purchase` int(11) NOT NULL,
  `id_user` int(11) NOT NULL DEFAULT '0',
  `payment_method` varchar(100) DEFAULT NULL,
  `paid` int(5) NOT NULL DEFAULT '0',
  `purchase_date` varchar(50) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `purchase_details`
--

CREATE TABLE `purchase_details` (
  `id_purchase` int(11) DEFAULT NULL,
  `id_book` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id_user` int(10) NOT NULL,
  `name` varchar(40) NOT NULL,
  `last_name` varchar(40) NOT NULL,
  `age` int(2) NOT NULL,
  `date_birth` date NOT NULL,
  `country` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `privilege` varchar(20) NOT NULL,
  `account_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id_author`);

--
-- Indices de la tabla `authors_books`
--
ALTER TABLE `authors_books`
  ADD PRIMARY KEY (`id_author`,`id_book`),
  ADD KEY `authors_books_ibfk_1` (`id_book`);

--
-- Indices de la tabla `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id_book`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id_category`);

--
-- Indices de la tabla `categories_books`
--
ALTER TABLE `categories_books`
  ADD PRIMARY KEY (`id_category`,`id_book`),
  ADD KEY `categories_books_ibfk_1` (`id_book`);

--
-- Indices de la tabla `purchase`
--
ALTER TABLE `purchase`
  ADD PRIMARY KEY (`id_purchase`),
  ADD KEY `FK_purchase_users` (`id_user`);

--
-- Indices de la tabla `purchase_details`
--
ALTER TABLE `purchase_details`
  ADD KEY `FK_purchase_details_purchase` (`id_purchase`),
  ADD KEY `FK_purchase_details_books` (`id_book`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `authors`
--
ALTER TABLE `authors`
  MODIFY `id_author` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `books`
--
ALTER TABLE `books`
  MODIFY `id_book` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `purchase`
--
ALTER TABLE `purchase`
  MODIFY `id_purchase` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(10) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `authors_books`
--
ALTER TABLE `authors_books`
  ADD CONSTRAINT `authors_books_ibfk_1` FOREIGN KEY (`id_book`) REFERENCES `books` (`id_book`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `authors_books_ibfk_2` FOREIGN KEY (`id_author`) REFERENCES `authors` (`id_author`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `categories_books`
--
ALTER TABLE `categories_books`
  ADD CONSTRAINT `categories_books_ibfk_1` FOREIGN KEY (`id_book`) REFERENCES `books` (`id_book`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `categories_books_ibfk_2` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id_category`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `purchase`
--
ALTER TABLE `purchase`
  ADD CONSTRAINT `FK_purchase_users` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `purchase_details`
--
ALTER TABLE `purchase_details`
  ADD CONSTRAINT `FK_purchase_details_books` FOREIGN KEY (`id_book`) REFERENCES `books` (`id_book`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_purchase_details_purchase` FOREIGN KEY (`id_purchase`) REFERENCES `purchase` (`id_purchase`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
