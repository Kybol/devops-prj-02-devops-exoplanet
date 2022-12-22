const express = require("express");
const router = express.Router();

const Exoplanet = require("../models/Exoplanet.js");
const checkNameExoplanet = require("../services/checkNameExoplanet.js");

/* GET exoplanets index. */
router.get("/", (req, res) => {
    res.render("exoplanets/index", { exoplanetsTable: Exoplanet.list() });
});

/* POST add exoplanet. */
router.post("/add", (req, res) => {
    console.log("POST ADD EXOPLANET");
    if (!checkNameExoplanet(req.body.uniqueNameExoplanet)) {
        res.render("exoplanets", {
            exoplanetsTable: Exoplanet.list(),
            error: `Format du nom incorrect. Utilisez des majuscules, chiffres, "-" ou "."`,
        });
        return;
    }
    Exoplanet.save({
        uniqueName: req.body.uniqueNameExoplanet,
        hClass: req.body.hClassExoplanet,
        discoveryYear: req.body.discoveryYearExoplanet,
    });
    res.redirect("/exoplanets");
});

/* GET search exoplanet. */
router.get("/search", (req, res) => {
    let exoplanetsTable = null;
    let min3Char = false;
    console.log("GET SEARCH EXOPLANET");
    if (req.query.uniqueNameExoplanet.length >= 3) {
        min3Char = true;
        exoplanetsTable = Exoplanet.search(req.query.uniqueNameExoplanet);
    }
    res.render("exoplanets/index", {
        exoplanetsTable: exoplanetsTable,
        min3Char: min3Char,
    });
});

module.exports = router;
