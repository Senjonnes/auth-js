const Joi = require("@hapi/joi");

// register validation
const register = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).max(225).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

// login validation
const login = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).max(225).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

module.exports.register = register;
module.exports.login = login;
