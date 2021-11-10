const express = require("express");
const router = express.Router();

const vehiclesController = require("./vehicles.js");

router.get("/api/v1/vehicles", vehiclesController.index);

module.exports = router;
