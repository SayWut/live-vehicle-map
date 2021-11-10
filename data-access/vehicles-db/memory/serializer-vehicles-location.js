const _serializeSingle = (vehicle) => {
  const { lat, lng } = vehicle.location;
  return {
    state: vehicle.state,
    location: { lat, lng },
  };
};

const serializer = (data) => {
  if (!data) {
    return null;
  }
  if (Array.isArray(data)) {
    return data.map(_serializeSingle);
  }
  return _serializeSingle(data);
};

module.exports = serializer;
