const Collection = require("../models/Collection");

// const getCollection = (req, res) => {
//     Collection.find({})
//         .exec()
//         .then((results) => {
//             res.setHeader(
//                 "Access-Control-Allow-Origin",
//                 "http://localhost:3000"
//             );
//             res.status(200).json(results);
//         })
//         .catch((error) => res.status(500).send(error));
// };

const getCollection = async (req, res) => {
    try {
        res.json(await Collection.find());
    } catch (error) {
        res.status(500).send(error);
    }
};

const postCollection = async (req, res) => {
    try {
        let collection = new Collection({
            aqua: req.body.aqua,
            chosenOtter: req.body.chosenOtter,
            imgURL: req.body.imgURL,
        });
        const response = await collection.save();
        res.json(response);
    } catch (error) {
        return res.status(500).send(error);
    }
};

module.exports = { getCollection, postCollection };
