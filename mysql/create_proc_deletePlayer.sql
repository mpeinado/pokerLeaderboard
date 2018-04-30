DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `deletePlayer`(in in_playerID float)
BEGIN
if exists (select * from pokerLeaderboard.player where playerID = in_playerID) 
then
	delete from pokerLeaderboard.winnings where playerID = in_playerID;
    delete from pokerLeaderboard.player where playerID = in_playerID;
end if;
END$$
DELIMITER ;
