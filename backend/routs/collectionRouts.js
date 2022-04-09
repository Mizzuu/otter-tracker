const express = require("express");
const router = express.Router();
const {
    getCollection,
    postCollection,
} = require("../controller/collectionController");

router.get("/", getCollection);
router.post("/", postCollection);

module.exports = router;
