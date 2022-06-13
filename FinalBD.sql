-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: localhost    Database: db-articles
-- ------------------------------------------------------
-- Server version	5.7.12-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `marque` varchar(255) DEFAULT NULL,
  `prix` float NOT NULL,
  `version` int(11) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `stock` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,'Biscuits carrés à la mangue 50g , dès 8 mois','Good Goût',2.65,2,'/assets/images/good-gout-biscuits.jpg',100),(2,'1 assiette conchiglie petits légumes, dès 18 mois','HippBiologique',2.43,2,'/assets/images/hipp-1-assiette.jpg',150),(3,'Assiette légumes cabillaud sauvage - 260g, dès 15 mois','Babynat',2.25,1,'/assets/images/babynat-assiette.jpg',100),(4,'Mes premiers biscuits, boudoirs goût fleur d\'oranger, dès 10 mois','Babybio',1.95,0,'/assets/images/babybio-boudoirs.jpg',80),(5,'Mini baguettes à la tomate, dès 10 mois -70g','Good Goût',3.59,1,'/assets/images/good-gout-mini-baguettes.jpg',36),(6,'Gourdes fruits à boire 3 saveurs 8x120ml, dès 12 mois','HippBiologique',8.13,0,'/assets/images/hipp-gourdes.jpg',120),(7,'Petits pots risotto de légumes, 2x 190g, dès 8 mois','HippBiologique',3.1,0,'/assets/images/hipp-petits-pots-risotto.jpg',100),(8,'Petits biscuits à la noisette 160g, dès 12 mois','Babybio',4.3,1,'/assets/images/babybio-petits-biscuits.jpg',50),(9,'Gourdes pomme poire peche,4 x 90g, dès 6-mois','Babybio',3.17,0,'/assets/images/babybio-gourdes.jpg',80),(10,'Lait de croissance,  6x1 litre, dès 10 mois','Babybio',13.5,4,'/assets/images/babybio-lait-de-croissance.jpg',40),(11,'Assiette aubergines macaroni dès 15 mois - 260gr','Babybio',4.5,1,'/assets/images/babybio-assiette.jpg',100),(12,'Lati 2e âge BIO, boite de 800g, Nouvelle Formule, 6-12 mois','Modilac',25.65,0,'/assets/images/modilac-laitbio.jpg',25),(13,'Pot macaroni tomates mozzarella dès 8 mois 220g','Bebivita',1.75,0,'/assets/images/bebivita-pot-macaroni.jpg',40),(14,'Brassé pommes bananes dès 6 mois 190g','Bebivita',13,0,'/assets/images/bebivita-brasse.jpg',40),(15,'2 pots pâtes epinards fromage, 2x250g, dès 12 mois','HippBiologique',4.61,1,'/assets/images/hipp-petits-pots-tagliatelles.jpg',60),(16,'Lot 2 gourdes pomme coing 120g, dès 6 mois','Good Goût',1.95,0,'/assets/images/good-gout-gourde.jpg',20),(17,'Préparation 3-en- 1 protéine de riz & céréales 800g, dès 10 mois','BebeM',30.15,1,'/assets/images/bebe-mandorle.jpg',30),(18,'Brassé à base de riz pêche framboise 4x85g - dès 6 mois','Good Goût',2,0,'/assets/images/good-gout-brasse.jpg',70),(19,'Petits pots carotte butternut poulet riz 2 x 200g - dès 6 mois','Babybio',2.91,0,'/assets/images/babybio-petits-pots.jpg',50),(20,'Coupelles crème dessert cacao, dès 6 mois 4x100g','HippBiologique',2.32,1,'/assets/images/hipp-creme-dessert.jpg',40),(35,'Brassé végétal riz pêche d\'occitanie, poire de provence, dès 6 mois','Babybio',4.5,0,'/assets/images/babybio-brasse-vegetal.jpg',0),(36,'Fromage blanc saveur pêche, lot de 4 pots de 90g, dès 6 mois','Babybio',2,0,'/assets/images/i7.jpg',0);
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (37);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personne`
--

DROP TABLE IF EXISTS `personne`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personne` (
  `mail` varchar(255) NOT NULL,
  `mdp` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `version` int(11) NOT NULL,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`mail`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personne`
--

LOCK TABLES `personne` WRITE;
/*!40000 ALTER TABLE `personne` DISABLE KEYS */;
INSERT INTO `personne` VALUES ('steeld@gmail.com','mdp1','STEEL','Danielle',2,'client'),('coelhop@gmail.com','mdp','Coelho','Paulo',0,'client'),('lebronj@gmail.com','mdp','Lebron','James',0,'admin'),('razan@gmail.com','mdp','Raza','Niu na Ony',1,'client'),('jacobsm@gmail.com','mdp','Jacobs','Mike',0,'client'),('fdsq@gmail.com','mdp','B','K',0,NULL),('bbbb@yahoo.fr','mdp','fd','df',0,NULL),('andriam@aol.com','mdp','andriamihaingo','miora',0,NULL),('cobenh@hotmail.com','mdp','coben','harlan',1,'admin'),('ashleys@yahoo.fr','mdp','ashley','simone',1,'client'),('yangt@yahoo.fr','mdp','Yang','Tommy',1,'client');
/*!40000 ALTER TABLE `personne` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'db-articles'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-13  8:52:23
