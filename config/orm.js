var connection = require("./connection");

var orm = {
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, res) {
            if(err) throw err;
            cb(res);
        });
    },

    insertOne: function (name, cb) {
        var queryString = "INSERT INTO burgers(burger_name, devoured) VALUES (?, false)";
        connection.query(queryString, name, function(err, res) {
            if(err) throw err;
            cb(res);
        });
    },

    updateOne: function(id, cb) {
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(queryString, id, function(err, res) {
            if(err) throw err;
            cb(res);
        })
    }
}

module.exports = orm;