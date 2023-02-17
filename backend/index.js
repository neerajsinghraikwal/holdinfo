require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser=require('body-parser');

const connect = require("./config/db");
const cryptoRouter = require("./routes/crypto.route");
const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());

mongoose.set("strictQuery", false);

app.use("/crypto", cryptoRouter);


app.get("/", (req, res) => {
	res.send("hello world!");
});

app.listen(PORT, async () => {
	connect()
	console.log(`Listening at http://localhost:${PORT}`);
});
