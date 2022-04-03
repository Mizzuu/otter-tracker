const Otter = require("../models/otterModel");

/** Vancouver ******************************* */
const getVancouver = (req, res) => {
    res.status(200).send("see vanaqua");
};

const postVancouver = (req, res) => {
    let vancouver = new Otter(req.body);
    vancouver
        .save()
        .then((result) => {
            res.status(200).json({
                data: vancouver,
                url: "api/otters/vancouver",
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
    res.status(200).send("post alaska");
};
/******************************************** */

/** Toba ******************************* */
const getToba = (req, res) => {
    res.status(200).send("see Toba");
};

const postToba = (req, res) => {
    res.status(200).send("post Toba");
};
/******************************************** */

/** Seattle ******************************* */
const getSeattle = (req, res) => {
    res.status(200).send("see Seattle");
};

const postSeattle = (req, res) => {
    res.status(200).send("post Seattle");
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
