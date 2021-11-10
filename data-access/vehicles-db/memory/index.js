const VEHICLES = require("../../../db/memory/vehicles");
const serializeLocation = require("./serializer-vehicles-location");
const serializeID = require("./serializer-vehicles-id");
const { parsePoints, verifyPolygonPoints } = require("./util");

/**
 *
 * @returns {Promise} promise with all the vehicles locations and state
 */
const listVehicles = () => {
  return Promise.resolve({
    success: true,
    vehicles: serializeLocation(VEHICLES),
  });
};

/**
 * Filters all the vehicles that inside a given polygon.
 * The polygon points has to be in this format latitude1,longitude1|latitude2,longitude2 ...
 * The polygon must be defined by atleast 3 points
 *
 * @param {String} rawPolygonPoints the polygon points
 * @returns the vehicles` id inside the polygon
 */
const findVehiclesInPolygon = (rawPolygonPoints) => {
  const polygonPoints = parsePoints(rawPolygonPoints);
  const verifyPolygon = verifyPolygonPoints(polygonPoints);

  if (verifyPolygon) {
    const pointInPolygon = require("point-in-polygon");
    const vehicles = VEHICLES.filter((vehicle) => {
      const { lat, lng } = vehicle.location;
      return pointInPolygon([lat, lng], polygonPoints);
    });

    return Promise.resolve({ success: true, vehicles: serializeID(vehicles) });
  }

  throw new Error("not a valid polygon");
};

module.exports = { listVehicles, findVehiclesInPolygon };
