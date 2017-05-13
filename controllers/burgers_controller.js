var express = require('express'),
    router = express.Router(),
    db = require("../models");

router.get("/", function(req, res) {
    db.Burger.findAll({ raw: true }).then(function(data) {
        var burger = data;
        console.log(burger);
        res.render("index", { burger: burger });
    })
})

router.put("/add", function(req, res) {
    var data = req.body;
    console.log(req.body);

    db.Burger.create({
        name: req.body.name,
        devouered: true,
    }).then(function(data) {
        res.redirect("/");
    })
})

router.put(":/id", function(req, res) {
    var id = req.params.id;
    console.log(id);

    db.Burger.update({
        devoured: false
    }, { where: { id: id } });
    res.redirect("/");
})

module.exports = router;