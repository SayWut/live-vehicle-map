let Joi = require("joi");

module.exports = Joi.object().keys({
  latitude: Joi.number()
    .required()
    .error(() => "must have lat as number"),
  longitude: Joi.number()
    .required()
    .error(() => "must have lng as number"),
});
