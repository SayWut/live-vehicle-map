import { MarkersLayer } from "./map-widgets/markers-layer.js";

/**
 * Creates MarkersLayer that represents the vehicles locations
 *
 * @param {Array.<object>} vehicles the vehicles array
 * @param {string} state the state of the vehicle
 * @param {string} imageSrc the markers image source
 * @returns {MarkersLayer} new MarkersLayer of the vehicle locations
 */
function createVehicleMarkersByState(vehicles, state, imageSrc) {
  const filteredVehicles = vehicles.filter(
    (vehicle) => vehicle.state === state
  );

  const vehiclesLonLat = filteredVehicles.map((vehicle) => [
    vehicle.location.lng,
    vehicle.location.lat,
  ]);

  return new MarkersLayer(vehiclesLonLat, imageSrc);
}

export { createVehicleMarkersByState };
