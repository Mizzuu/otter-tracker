const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config({ path: "../.env" });
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", require("./routs/otterRouts"));

app.use("/collection", require("./routs/collectionRouts"));

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.listen(port, () => console.log(`server started on port ${port}`));
