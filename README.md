# pokerLeaderboard

## MySql Back end
The directory /mysql has the following files:
- create_schema_pokerLeaderboard.sql - creates the schema used on the app
- create_table_player.sql -             create player table
- create_table_winnings.sql -           create winnings
- create_proc_createPlayer.sql -        stored procedure to create a player     
- create_proc_deletePlayer.sql -        stored procedure to delete a player       
- create_proc_editPlayer.sql -          stored procedure to edit a player         
- create_proc_getPlayerRankings.sql -   stored procedure to get the leaderboard 


## pokerLeaderBoardAPI
Node.js API 

### Setup Poker Leaderboard API 
Run 'npm install' inside /pokerLeaderBoardAPI

### Run Poker Leaderboard API
Run 'npm run start' inside /pokerLeaderBoardAPI

### Poker Leaderboard API Swagger Spec 
Navigate to http://localhost:4000/api-docs/

Here you will be able to look at a swagger spec for the API

## Poker Leaderboard Front End
Navigate to http://localhost:4000/api-docs/

### Setup Poker Leaderboard Front End
Run 'npm install' inside /pokerLeaderBoardUI

### Run Poker Leaderboard Front End
Run 'npm run start' inside /pokerLeaderBoardUI

