/** Vancouver ******************************* */
const getVancouver = (req, res) => {
    res.status(200).send("see vanaqua");
};

const postVancouver = (req, res) => {
    res.status(200).send("post vanaqua");
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
