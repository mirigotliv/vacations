-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 02, 2021 at 01:59 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vacations`
--
CREATE DATABASE IF NOT EXISTS `vacations` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `vacations`;

-- --------------------------------------------------------

--
-- Table structure for table `allvacations`
--

CREATE TABLE `allvacations` (
  `vacationId` int(11) NOT NULL,
  `target` varchar(300) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(300) NOT NULL,
  `image` varchar(300) NOT NULL,
  `numberFollowers` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `allvacations`
--

INSERT INTO `allvacations` (`vacationId`, `target`, `startDate`, `endDate`, `price`, `description`, `image`, `numberFollowers`) VALUES
(1, 'Thessaloniki', '2021-07-01', '2021-07-07', 1483, 'The 5-star The Met Hotel is located in the heart of the port of Thessaloniki and offers a central and attractive location, unique luxury design, and easy access to all the important and interesting sites in the city.', 'MET HOTEL', 27),
(2, 'London', '2021-08-08', '2021-08-12', 810, 'Boasting luxuriously decorated guest rooms, Hotel Adria offers personalized service and gourmet cuisine served in 5 stylish lounges. This Victorian urban boutique home is in the elegant Kensington neighborhood.', 'Adria Hotel', 18);

-- --------------------------------------------------------

--
-- Table structure for table `followers`
--

CREATE TABLE `followers` (
  `userId` int(11) NOT NULL,
  `vacationId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `followers`
--

INSERT INTO `followers` (`userId`, `vacationId`) VALUES
(1, 1),
(2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `firstName` varchar(200) NOT NULL,
  `lastName` varchar(200) NOT NULL,
  `userName` varchar(200) NOT NULL,
  `password` varchar(500) NOT NULL,
  `isAdmin` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `firstName`, `lastName`, `userName`, `password`, `isAdmin`) VALUES
(1, 'Chen', 'Fridman', 'chenfridman', '1479839', 'no'),
(2, 'Noy', 'Cohen', 'noycohen', '2073008', 'yes');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `allvacations`
--
ALTER TABLE `allvacations`
  ADD UNIQUE KEY `vacationId` (`vacationId`);

--
-- Indexes for table `followers`
--
ALTER TABLE `followers`
  ADD PRIMARY KEY (`userId`,`vacationId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD UNIQUE KEY `userId` (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `allvacations`
--
ALTER TABLE `allvacations`
  MODIFY `vacationId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
