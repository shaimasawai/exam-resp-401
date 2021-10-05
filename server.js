const express = require("express");

const cors = require("cors");

const axios = require("axios");

require("dotenv").config();

const app = express();
const mongose = require("mongoose");

app.use(cors());

app.use(express.json());
const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL;
mongose.connect(
  "mongodb+srv://shaima:631995@cluster0.sjo2o.mongodb.net/Flower?retryWrites=true&w=majority",
  {
    UserNewUrlParser: true,
    UseUnifiedTopology: true,
  }
);
const {
  getTestControllers,
  creatTest,
  deleteTest,
  constupdataTest,
} = require("./Controllers/Flower.Controllres");
const getwathe = (req, res) => {
  let Url = "https://watches-world.herokuapp.com/watches-list/";
  axios.get(Url).then((md) => {
    let wathe = md.data.map((item) => {
      return item;
    });
    resizeBy.send(wathe);
  });
};
app.get("/wathe", getwathe);
app.get("/watchnew", getTestControllers);
app.post("/watchnew", creatTest);
app.delete("/watchnew", deleteTest);
app.put("/watchnew", constupdataTest);
app.listen(PORT, () => console.log(`listen on ${PORT}`));
