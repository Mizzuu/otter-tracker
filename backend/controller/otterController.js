const Birmingham = require("../models/Birmingham");
const Toba = require("../models/Toba.js");
const Vancouver = require("../models/Vancouver.js");
const Seattle = require("../models/Seattle");

/** Vancouver ******************************* */
const getVancouver = (req, res) => {
    Vancouver.find({})
        .exec()
        .then((results) => {
            res.setHeader(
                "Access-Control-Allow-Origin",
                "http://localhost:3000"
            );
            res.status(200).json(results);
        })
        .catch((error) => res.status(500).send(error));
};

const postVancouver = (req, res) => {
    let vancouver = new Vancouver(req.body);
    vancouver
        .save()
        .then((result) => {
            res.status(200).json({
                data: vancouver,
                url: "/api/vancouver",
            });
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};
/******************************************** */

/** Birmingham ******************************* */
const getBirmingham = (req, res) => {
    Birmingham.find({})
        .exec()
        .then((results) => {
            res.setHeader(
                "Access-Control-Allow-Origin",
                "http://localhost:3000"
            );
            res.status(200).json(results);
        })
        .catch((error) => res.status(500).send(error));
};

const postBirmingham = (req, res) => {
    let birmingham = new Birmingham(req.body);
    birmingham
        .save()
        .then((result) => {
            res.status(200).json({
                data: birmingham,
                url: "/api/birmingham",
            });
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};
/******************************************** */

/** Toba ******************************* */
const getToba = (req, res) => {
    Toba.find({})
        .exec()
        .then((results) => {
            res.setHeader(
                "Access-Control-Allow-Origin",
                "http://localhost:3000"
            );
            res.status(200).json(results);
        })
        .catch((error) => res.status(500).send(error));
};

const postToba = (req, res) => {
    let toba = new Toba(req.body);
    toba.save()
        .then((result) => {
            res.status(200).json({
                data: toba,
                url: "/api/toba",
            });
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};
/******************************************** */

/** Seattle ******************************* */
const getSeattle = (req, res) => {
    Seattle.find({})
        .exec()
        .then((results) => {
            res.setHeader(
                "Access-Control-Allow-Origin",
                "http://localhost:3000"
            );
            res.status(200).json(results);
        })
        .catch((error) => res.status(500).send(error));
};

const postSeattle = (req, res) => {
    let seattle = new Seattle(req.body);
    seattle
        .save()
        .then((result) => {
            res.status(200).json({
                data: seattle,
                url: "/api/seattle",
            });
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};
/******************************************** */

module.exports = {
    getVancouver,
    postVancouver,
    getBirmingham,
    postBirmingham,
    getToba,
    postToba,
    getSeattle,
    postSeattle,
};
