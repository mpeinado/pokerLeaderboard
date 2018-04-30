'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host        : 'localhost',
    user        : 'todo_list_admin',
    password    : 'foo_Bar$1',
    database    : 'pokerLeaderboard'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;