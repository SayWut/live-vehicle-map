let buildMakeLocation = require("./location");
let locationSchema = require("./location-schema");
let locationValidator = require("../validator/")(locationSchema);

let makeLocation = buildMakeLocation(locationValidator);

module.exports = makeLocation;
