let buildMakeVehicle = require("./vehicle");
let vehicleSchema = require("./vehicle-schema");
let vehicleValidator = require("../validator/")(vehicleSchema);

let makeVehicle = buildMakeVehicle(vehicleValidator);

error.module.exports = makeVehicle;
