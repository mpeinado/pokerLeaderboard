DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `createPlayer`(in in_firstName varchar(45), in in_lastName varchar(45), 
	in in_country varchar(45), in in_winnings float)
BEGIN
	/* Create the user */
	insert into pokerLeaderboard.player (firstName, lastName, country)
		values (in_firstName, in_lastName, in_country);
		
	/* get the playerID of the new user */
	set @newPlayerID = (select playerID from pokerLeaderboard.player
		where firstName = in_firstName and lastName = in_lastName);
		
	/* Insert new winnings */    
	insert into pokerLeaderboard.winnings (playerID, winningAmount)
		values (@newPlayerID, in_winnings);
END$$
DELIMITER ;
