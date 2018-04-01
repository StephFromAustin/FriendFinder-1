// Dependencies
var path = require('path');

// Pull data 
var friendData = require('../data/friends.js')

// Exports the file paths
module.exports = function(app){

    app.get('/api/friends', function(req, res){
        res.json(friendData);
    });

    app.post('/api/friends', function(req, res){
        friendData.push(req.body);
    })
};