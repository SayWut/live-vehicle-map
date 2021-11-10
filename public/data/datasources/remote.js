const axios = window.axios;

/**
 * @returns {Promise} all the vehicles from the api
 */
const getVehicles = () => _getVehiclesURL("/api/v1/vehicles");

/**
 * @param {string} points the polygon points
 * @returns {Promise} the vehicles that inside the polygon
 */
const getVehiclesInsidePolygon = (points) =>
  _getVehiclesURL(`/api/v1/vehicles?points=${points}`);

// do a HTTP GET request
// if the response is successful returns the response data; otherwise throws an error
const _getVehiclesURL = async (url) => {
  const response = await axios.get(url);
  const responseData = response.data;
  if (responseData.success) {
    return responseData.vehicles;
  }

  throw new Error("Not successful response");
};

export { getVehicles, getVehiclesInsidePolygon };
