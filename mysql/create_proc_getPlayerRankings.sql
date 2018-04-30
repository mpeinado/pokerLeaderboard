DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_player_rankings`()
BEGIN
	select @curRank := @curRank + 1 AS rank, p.playerID, p.firstName, p.lastName, w.winningAmount, p.country
	from pokerLeaderboard.winnings as w
    inner join pokerLeaderboard.player as p on p.playerID = w.playerID,
    (select @curRank := 0) r
    order by w.winningAmount desc;
END$$
DELIMITER ;
