'use strict';

module.exports = function(app){
    const playerRankingsModel = require('../models/playerRankings');

    /**
     * @swagger
     * /api/rankings/:
     *   get:
     *     tags:
     *       - Player Rankings
     *     description: Returns an array of ranked players
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Player Rankings
     *         schema:
     *                  
     */
    app.route('/api/rankings/')
        .get(playerRankingsModel.getPlayerRankings);

    /**
     * @swagger
     * /api/createPlayer/:
     *   post:
     *     tags:
     *       - Player Rankings
     *     description: Returns an array of ranked players
     *     parameters:
     *      - in: body
     *        name: player
     *        description: The player to create/update.
     *        schema:
     *            type: object
     *            required:
     *            - firstName
     *            - lastName
     *            - country
     *            properties:
     *                firstName:
     *                    type: string
     *                lastName:
     *                    type: string
     *                country:
     *                  type: string
     *                winnings:
     *                  type: number
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Create Player
     *         schema:
     *                  
     */
    app.route('/api/createPlayer/')
        .post(playerRankingsModel.createPlayer);

    /**
     * @swagger
     * /api/editPlayer/:
     *   put:
     *     tags:
     *       - Player Rankings
     *     description: Returns an array of ranked players
     *     parameters:
     *      - in: body
     *        name: player
     *        description: The player to create/update.
     *        schema:
     *            type: object
     *            required:
     *            - playerID
     *            properties:
     *                playerID:
     *                    type: number
     *                firstName:
     *                    type: string
     *                lastName:
     *                    type: string
     *                country:
     *                  type: string
     *                winningAmount:
     *                  type: number
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Create Player
     *         schema:
     *                  
     */
    app.route('/api/editPlayer/')
        .put(playerRankingsModel.editPlayer);

    /**
     * @swagger
     * /api/deletePlayer/:
     *   post:
     *     tags:
     *       - Player Rankings
     *     description: Deletes a Player
     *     parameters:
     *      - in: body
     *        name: player
     *        description: The player to create/update.
     *        schema:
     *            type: object
     *            required:
     *            - playerID
     *            properties:
     *                playerID:
     *                    type: number
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Delete Player
     *         schema:
     *                  
     */
    app.route('/api/deletePlayer/')
        .post(playerRankingsModel.deletePlayer);
   
};