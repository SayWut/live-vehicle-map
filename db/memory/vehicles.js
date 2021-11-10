// This class reads the json database and exports it

const { readFileSync } = require("fs");
const path = require("path");

const vehiclesJsonPath = path.join(__dirname, "./vehicles_location.json");
const rawVehiclesJson = readFileSync(vehiclesJsonPath, "utf8");
const parsedVehiclesJson = JSON.parse(rawVehiclesJson);

module.exports = parsedVehiclesJson;
