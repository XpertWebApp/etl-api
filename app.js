require("dotenv").config();

const express = require("express");

const app = express();
const cors = require("cors");

const port = 5000;

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const db = require("./models");

db.sequelize.sync();

app.use("/records", require("./routes/records"));

app.use("/",(req, res, next) => {
    return res.status(404).send(
        "<h1 style='text-align:center'>ETL Demo Api</h1>")
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`ETL api listening on port ${port}!`);
});
