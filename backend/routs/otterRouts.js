const express = require("express");
const router = express.Router();
const {
    getVancouver,
    postVancouver,
    getAlaska,
    postAlaska,
    getToba,
    postToba,
    getSeattle,
    postSeattle,
} = require("../controller/otterController");

router.route("/vancouver").get(getVancouver).post(postVancouver);
router.route("/alaska").get(getAlaska).post(postAlaska);
router.route("/toba").get(getToba).post(postToba);
router.route("/seattle").get(getSeattle).post(postSeattle);

// router.get("/", getOtters);

// router.post("/", postOtters);

// router.get("/", (req, res) => {
//     res.status(200).send("see otters");
// });

module.exports = router;
