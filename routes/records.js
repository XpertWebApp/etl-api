const express = require("express");

const router = express.Router();

const RecordController = require("../controllers/records");

router.post("/", RecordController.create);

router.get("/", RecordController.fetchAll);

module.exports = router;
