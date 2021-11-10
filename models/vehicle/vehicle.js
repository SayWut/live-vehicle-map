let buildMakeVehicle = function (vehicleValidator) {
  return ({ id, state, location } = {}) => {
    let { error } = vehicleValidator({ id, state, location });
    if (error) throw new Error(error);

    return {
      getID: () => id,
      getState: () => state,
      getLocation: () => location,
    };
  };
};

module.exports = buildMakeVehicle;
