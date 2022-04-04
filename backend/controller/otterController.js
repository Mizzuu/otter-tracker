const Otter = require("../models/Alaska");
const Toba = require("../models/Toba.js");
const Vancouver = require("../models/Vancouver.js");
const Alaska = require("../models/Alaska.js");
const Seattle = require("../models/Seattle");

/** Vancouver ******************************* */
const getVancouver = (req, res) => {
    Vancouver.find({})
        .exec()
        .then((results) => {
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

/** Alaska ******************************* */
const getAlaska = (req, res) => {
    res.status(200).send("see alaska");
};

const postAlaska = (req, res) => {
    let alaska = new Alaska(req.body);
    alaska
        .save()
        .then((result) => {
            res.status(200).json({
                data: alaska,
                url: "/api/alaska",
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
    res.status(200).send("see Seattle");
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
    getAlaska,
    postAlaska,
    getToba,
    postToba,
    getSeattle,
    postSeattle,
};
