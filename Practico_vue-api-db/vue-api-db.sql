-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-09-2020 a las 21:26:00
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `vue-api-db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--

CREATE TABLE `factura` (
  `id_factura` int(30) NOT NULL,
  `nombre_producto` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `nombre_cliente` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `iva` varchar(45) COLLATE utf8mb4_spanish_ci NOT NULL,
  `cantidad` int(30) NOT NULL,
  `subtotal` varchar(45) COLLATE utf8mb4_spanish_ci NOT NULL,
  `total` varchar(45) COLLATE utf8mb4_spanish_ci NOT NULL,
  `forma_pago` varchar(45) COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `factura`
--

INSERT INTO `factura` (`id_factura`, `nombre_producto`, `nombre_cliente`, `iva`, `cantidad`, `subtotal`, `total`, `forma_pago`) VALUES
(3, 'Mouse', 'Walter Gal', '31.5', 1, '150', '181.5', 'Efectivo'),
(10, 'CPU', 'Nahir Fuentealba', '18900', 1, '90000', '108900', 'Tarj. de Cto');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `factura`
--
ALTER TABLE `factura`
  ADD PRIMARY KEY (`id_factura`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `factura`
--
ALTER TABLE `factura`
  MODIFY `id_factura` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
