const validator = (schema) => (payload) => {
  const { error } = schema.validate(payload, { abortEarly: false });
  if (erorr) {
    const message = error.details.map((el) => el.message).join("\n");
    return {
      error: message,
    };
  }

  return true;
};

module.exports = validator;
