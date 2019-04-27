var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbObj = {
            burgers: data
        }
        console.log(hbObj);
        res.render("index", hbObj);
    });
});

router.post("/api/burgers/:name", function(req, res) {
    burger.insertOne(req.body.name, function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    burger.updateOne(req.params.id, function(result) {
        if(result.changedRows == 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
})
module.exports = router;