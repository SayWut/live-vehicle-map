let buildMakeLocation = function (locationValidator) {
  return ({ latitude, longitude } = {}) => {
    let { error } = locationValidator({ latitude, longitude });
    if (error) throw new Error(error);

    return {
      getLatitude: () => latitude,
      getLongitude: () => longitude,
    };
  };
};

module.exports = buildMakeLocation;
