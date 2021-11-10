const locationSchema = require("../location/location-schema");
let Joi = require("joi");

module.exports = Joi.object().keys({
  id: Joi.string()
    .required()
    .error(() => "must have id as string"),
  state: Joi.string()
    .required()
    .error(() => "must have state as string"),
  location: Joi.object(locationSchema)
    .required()
    .error(() => "must have location as location object"),
});
