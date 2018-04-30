'use strict';
const db = require('../../db.js');

/**
 * Get Player Rankings
 * @param {*} req 
 * @param {*} res 
 */
exports.getPlayerRankings = (req, res) => {
    const dbQuery = "CALL pokerLeaderboard.get_player_rankings()";

    db.query(dbQuery, (error, results, fields) => {
        if(error){
            console.log(`Query Error: ${error}`);

            res.send(JSON.stringify({"status": 500, "error": error, "response": []})); 
        } else {
            // @TODO error handeling
            res.json(results[0]);
        }
    });
};

/**
 * Create a poker player
 * @param {*} req 
 * @param {*} res 
 */
exports.createPlayer = (req, res) => {
    // @NOTE UI is making each of the files required and doming some validation. 
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const country = req.body.country;
    const winnings = req.body.winningAmount;

    const dbQuery = `CALL pokerLeaderboard.createPlayer('${firstName}', '${lastName}', '${country}', ${winnings})`;

    db.query(dbQuery, (error, results, fields) => {
        if(error){
            console.log(`Query Error: ${error}`);

            res.send(JSON.stringify({"status": 500, "error": error, "response": []})); 
            //If there is error, we send the error in the error section with 500 status
        } else {
            // @TODO error handeling
            res.json(results.affectedRows);
        }
    });
};

/**
 * Edit a poker player
 * @param {*} req 
 * @param {*} res 
 */
exports.editPlayer = (req, res) => {
    // @NOTE UI is making each of the files required and doming some validation. 
    const playerID = req.body.playerID || null;
    const firstName = req.body.firstName || '';
    const lastName = req.body.lastName || '';
    const country = req.body.country || '';
    const winnings = req.body.winningAmount || null;

    const dbQuery = `CALL pokerLeaderboard.editPlayer(${playerID}, '${firstName}', '${lastName}', '${country}', ${winnings})`;

    db.query(dbQuery, (error, results, fields) => {
        if(error){
            console.log(`Query Error: ${error}`);

            res.send(JSON.stringify({"status": 500, "error": error, "response": []})); 
        } else {
             // @TODO error handeling
            res.json(results.affectedRows);
        }
    });
};

/**
 * Delete a poker player
 * @param {*} req 
 * @param {*} res 
 */
exports.deletePlayer = (req, res) => {
    // @NOTE UI is making each of the files required and doming some validation. 
    const playerID = req.body.playerID || null;

    const dbQuery = `CALL pokerLeaderboard.deletePlayer(${playerID})`;

    db.query(dbQuery, (error, results, fields) => {
        if(error){
            console.log(`Query Error: ${error}`);

            res.send(JSON.stringify({"status": 500, "error": error, "response": []})); 
        } else {
             // @TODO error handeling
            res.json(results.affectedRows);
        }
    });
};
