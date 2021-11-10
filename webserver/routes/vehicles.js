const vehiclesDb = require("../../data-access/vehicles-db/index");

module.exports.index = (req, res) => {
  const { points } = req.query;

  // checks if the points query parameter is present
  if (points) {
    vehiclesDb.findVehiclesInPolygon(points).then((data) => res.send(data));
  } else {
    vehiclesDb.listVehicles().then((data) => res.send(data));
  }
};
