-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: localhost    Database: photo_portal
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `likes` (
  `USER_ID` int(11) NOT NULL,
  `POST_ID` int(11) NOT NULL,
  `ID_LIKE` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`ID_LIKE`),
  KEY `USER_ID_idx` (`USER_ID`),
  KEY `POST_ID_idx` (`POST_ID`),
  CONSTRAINT `POST_ID_LIKE` FOREIGN KEY (`POST_ID`) REFERENCES `photo_post` (`POST_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `USER_ID_LIKE` FOREIGN KEY (`USER_ID`) REFERENCES `user` (`USER_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES (1,2,1),(2,3,2),(3,2,3),(2,9,4);
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photo_post`
--

DROP TABLE IF EXISTS `photo_post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `photo_post` (
  `POST_ID` int(11) NOT NULL AUTO_INCREMENT,
  `DESCRIPTION` varchar(300) NOT NULL,
  `CREATION_DATE` datetime NOT NULL,
  `PHOTO_LINK` varchar(300) NOT NULL,
  `USER_ID` int(11) NOT NULL,
  PRIMARY KEY (`POST_ID`),
  KEY `USER_ID_idx` (`USER_ID`),
  CONSTRAINT `USER_ID_AUTHOR` FOREIGN KEY (`USER_ID`) REFERENCES `user` (`USER_ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photo_post`
--

LOCK TABLES `photo_post` WRITE;
/*!40000 ALTER TABLE `photo_post` DISABLE KEYS */;
INSERT INTO `photo_post` VALUES (1,'SDFSGBVGFDSFGHJGHJHGGFZD','2019-01-01 12:02:00','http://pm1.narvii.com/6395/b8c73337db89f13c478524e378590b806edb30c7_00.jpg',3),(2,'EDCFRTGREDCFREWDCFREWDSXCFRSDFSDFSDFSDF','2019-01-01 12:02:00','http://pm1.narvii.com/6395/b8c73337db89f13c478524e378590b806edb30c7_00.jpg',11),(3,'EQRWDGKJHGHJP','2019-01-01 12:02:00','http://pm1.narvii.com/6395/b8c73337db89f13c478524e378590b806edb30c7_00.jpg',8),(4,'FGHJKLPOIUYTREWEFGHJKKJCXCVBNMKsdfgirefghjkhfdfghjkl;','2019-01-01 12:02:00','http://pm1.narvii.com/6395/b8c73337db89f13c478524e378590b806edb30c7_00.jpg',12),(5,'oiuytresdfhjklmnbvcxzsdfghjklkjhgf','2019-05-09 12:02:00','http://pm1.narvii.com/6395/b8c73337db89f13c478524e378590b806edb30c7_00.jpg',11),(6,'iuytrewsdfghjklhgfdsasdfghjkiuytrewrtyuiolkjhgfds','2019-05-09 12:02:00','http://pm1.narvii.com/6395/b8c73337db89f13c478524e378590b806edb30c7_00.jpg',7),(7,'edcvbjkuyfbnkiuytgbnkiuygfvbnkuygjuytgbnjgfvbnjgfvbjuygvbnjgvbnjh','2019-05-09 12:02:00','http://pm1.narvii.com/6395/b8c73337db89f13c478524e378590b806edb30c7_00.jpg',1),(8,'ikmnjbgfc','2019-05-23 19:56:02','http://pm1.narvii.com/6395/b8c73337db89f13c478524e378590b806edb30c7_00.jpg',2),(9,'lkjnbvftyujkkjhgfdfghjkjhgfdfghjkjhgfdfghj','2019-05-23 19:56:02','http://pm1.narvii.com/6395/b8c73337db89f13c478524e378590b806edb30c7_00.jpg',3),(10,'loiuytrewdfghjklkjhgfdfghm,mnbvcxcghjkjhytrtyujD','2019-05-23 19:56:02','http://pm1.narvii.com/6395/b8c73337db89f13c478524e378590b806edb30c7_00.jpg',3),(11,'kjhygff','2019-05-23 19:56:02','http://pm1.narvii.com/6395/b8c73337db89f13c478524e378590b806edb30c7_00.jpg',3),(12,'Apple','2019-05-01 00:03:00',' sdfsdf',1),(13,'Apple','2019-05-01 03:00:00',' sdfsdf',2),(14,'Apple','2019-05-01 02:05:00',' sdfsdf',3),(15,'Apple','2019-05-01 01:12:00',' sdfsdf',8),(16,'Apple','2019-05-01 00:03:00',' sdfsdf',1),(17,'Apple','2019-02-01 03:00:00',' sdfsdfhello',2),(18,'Apple','2019-05-01 02:05:00',' hello dfsdfsdf',3),(19,'Apple','2019-02-01 01:12:00',' sdfsdfsdfsdf',8),(20,'Apple','2019-05-01 00:03:00',' sdfsdf',1),(21,'helloыкаываыва','2019-02-01 03:00:00',' sdfsdfhello',2),(22,'hello','2019-05-01 02:05:00',' hello dfsdfsdf',3),(23,'Apple','2019-02-01 01:12:00',' sdfsdfsdfsdf',8),(24,'Apple','2019-05-01 00:03:00',' sdfsdf',1),(25,'helloыкаываыва','2019-05-23 00:00:00',' sdfsdfhello',2),(26,'hello','2019-05-01 02:05:00',' hello dfsdfsdf',3),(27,'Apple','2019-02-01 01:12:00',' sdfsdfsdfsdf',8),(28,'Apple','2019-05-01 00:03:00',' sdfsdf',1),(29,'helloыкаываыва','2019-05-23 00:00:00',' sdfsdfhello',2),(30,'hello','2019-05-01 02:05:00',' hello dfsdfsdf',3),(31,'Apple','2019-02-01 01:12:00',' sdfsdfsdfsdf',8),(32,'Apple','2019-05-01 00:03:00',' sdfsdf',1),(33,'helloыкаываыва','2019-05-23 00:00:00',' sdfsdfhello',2),(34,'hello','2019-05-01 02:05:00',' hello dfsdfsdf',3),(35,'Apple','2019-02-01 01:12:00',' sdfsdfsdfsdf',8),(36,'Apple','2019-05-01 00:03:00',' sdfsdf',1),(37,'helloыкаываыва','2019-05-23 00:00:00',' sdfsdfhello',2),(38,'hello','2019-05-01 02:05:00',' hello dfsdfsdf',3),(39,'Apple','2019-02-01 01:12:00',' sdfsdfsdfsdf',8);
/*!40000 ALTER TABLE `photo_post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post_tag`
--

DROP TABLE IF EXISTS `post_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `post_tag` (
  `POST_ID` int(11) NOT NULL,
  `TAG_ID` int(11) NOT NULL,
  `POST_TAG_ID` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`POST_TAG_ID`),
  KEY `POST_ID_TAG_idx` (`POST_ID`),
  KEY `TAG_ID_POST_TAG_idx` (`TAG_ID`),
  CONSTRAINT `POST_ID_POST_TAG` FOREIGN KEY (`POST_ID`) REFERENCES `photo_post` (`POST_ID`),
  CONSTRAINT `TAG_ID_POST_TAG` FOREIGN KEY (`TAG_ID`) REFERENCES `tag` (`TAG_ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_tag`
--

LOCK TABLES `post_tag` WRITE;
/*!40000 ALTER TABLE `post_tag` DISABLE KEYS */;
INSERT INTO `post_tag` VALUES (2,1,1),(3,2,2),(2,3,3),(9,2,4);
/*!40000 ALTER TABLE `post_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tag` (
  `TAG_ID` int(11) NOT NULL AUTO_INCREMENT,
  `TAG` varchar(45) NOT NULL,
  PRIMARY KEY (`TAG_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
INSERT INTO `tag` VALUES (1,'nature'),(2,'nofilter'),(3,'city'),(4,'folow4folow');
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `USER_ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(45) NOT NULL,
  PRIMARY KEY (`USER_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Alexandr'),(2,'Vlad'),(3,'Daria'),(4,'Julia'),(5,'Alex'),(6,'Pasha'),(7,'Lich'),(8,'Dad'),(9,'Nagibator228'),(10,'Batya'),(11,'Polina'),(12,'Vera'),(13,'Nikita'),(14,'Liza'),(15,'Kirill'),(16,'Robert'),(17,'Kris'),(18,'Kirill'),(19,'Vlad'),(20,'Alina'),(21,'d');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-23 22:42:23
