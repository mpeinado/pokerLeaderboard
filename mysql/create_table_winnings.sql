CREATE TABLE `winnings` (
  `winningsID` int(11) NOT NULL AUTO_INCREMENT,
  `playerID` int(11) NOT NULL,
  `winningAmount` float DEFAULT '0',
  PRIMARY KEY (`winningsID`),
  KEY `playerID_idx` (`playerID`),
  CONSTRAINT `playerID` FOREIGN KEY (`playerID`) REFERENCES `player` (`playerID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8;
