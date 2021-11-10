import {
  getVehicles,
  getVehiclesInsidePolygon,
} from "../../../data/datasources/remote.js";
import { serializer as serializerID } from "./serializer-vehicles-id.js";
import { serializer as serializerLocation } from "./serializer-vehicles-location.js";

/**
 * @returns {Promise} all the vehicles from the api
 */
const getAllVehicles = () => {
  try {
    return getVehicles().then((data) => serializerLocation(data));
  } catch (error) {
    console.log(error);
  }
};

/**
 * @param {string} points the polygon points
 * @returns {Promise} the vehicles that inside the polygon
 */
const filterVehiclesInPolygon = (polygonPoints) => {
  try {
    return getVehiclesInsidePolygon(polygonPoints).then((data) => {
      return serializerID(data);
    });
  } catch (error) {
    console.log(error);
  }
};

export { getAllVehicles, filterVehiclesInPolygon };
