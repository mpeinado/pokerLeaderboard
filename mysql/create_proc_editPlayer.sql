DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `editPlayer`(in in_playerID int, in in_firstName varchar(45), in in_lastName varchar(45), 
	in in_country varchar(45), in in_winnings float)
BEGIN

set @playerID = in_playerID,
        @firstName = if(in_firstName = '', null, in_firstName),
        @lastName = if(in_lastName = '', null, in_lastName),
        @country = if(in_country = '', null, in_country),
        @winnings = in_winnings;

if in_playerID is not null 
then
	/* Update existing user/winnings */
	/* Update the user */
	update pokerLeaderboard.player
		set firstName = COALESCE(@firstName, firstName),
			lastName = COALESCE(@lastName, lastName),
			country = coalesce(@country, country)
			where playerID = @playerID;

	/* Update the winnings */
	if in_winnings is not null 
	then 
		update pokerLeaderboard.winnings 
			set winningAmount = @winnings
            where playerID = in_playerID;
	end if;
end if;
END$$
DELIMITER ;
