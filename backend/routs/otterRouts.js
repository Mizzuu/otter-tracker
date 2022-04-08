const express = require("express");
const router = express.Router();
const {
    getBirmingham,
    postBirmingham,
    getSeattle,
    postSeattle,
    getVancouver,
    postVancouver,
    getToba,
    postToba,
} = require("../controller/otterController");

router.get("/birmingham", getBirmingham);
router.post("/birmingham", postBirmingham);
router.get("/seattle", getSeattle);
router.post("/seattle", postSeattle);
router.get("/vancouver", getVancouver);
router.post("/vancouver", postVancouver);
router.get("/toba", getToba);
router.post("/toba", postToba);

module.exports = router;
