import {
  getAllVehicles as getAllVehiclesRemote,
  filterVehiclesInPolygon as filterVehiclesInPolygonRemote,
} from "../../../data-access/vehicles-db/remote/index.js";
import * as mapUtil from "./map-util.js";
import { PolygonInteraction } from "./map-widgets/polygon-interaction.js";

// creates polygon interaction
const polygonInteraction = new PolygonInteraction();
polygonInteraction.setActive(false);

// sets the map
var map = new ol.Map({
  interactions: ol.interaction.defaults().extend([polygonInteraction]),
  target: "map",
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-0.15, 51.5]),
    zoom: 10.5,
    maxZoom: 20,
  }),
});

// gets all the vehicles and adds them to the map
getAllVehiclesRemote().then((vehicles) => {
  const onlineVehiclesLayer = mapUtil.createVehicleMarkersByState(
    vehicles,
    "in-ride",
    "/assets/images/in_ride.png"
  );
  const inRideVehiclesLayer = mapUtil.createVehicleMarkersByState(
    vehicles,
    "online",
    "/assets/images/online.png"
  );

  map.addLayer(onlineVehiclesLayer);
  map.addLayer(inRideVehiclesLayer);
  map.addLayer(polygonInteraction.vectorLayer);
});

// gets all the vehicles inside the polygon and showing their ids
polygonInteraction.on("drawend", (data) => {
  const coordinates = data.feature.getGeometry().getCoordinates()[0];
  const latLonCoordinates = coordinates.map((coordinate) =>
    ol.proj.toLonLat(coordinate).reverse()
  );
  const polygonPoints = latLonCoordinates.join("|");

  filterVehiclesInPolygonRemote(polygonPoints).then((data) => {
    const vehicles = data;

    let selectedVehicles = "";

    for (let i = 0; i < vehicles.length; i++) {
      const htmlTemplate = `<li class="list-group-item">${vehicles[i].id}</li>`;
      selectedVehicles += htmlTemplate;
    }

    const selectedVehiclesElement = document.getElementById("vehicles");
    selectedVehiclesElement.innerHTML = `<ul class="list-group">${selectedVehicles}</ul>`;
  });
});

// sets the controller click event and toggles between pointer and polygon
document
  .getElementById("controller-pointer")
  .addEventListener("click", () => polygonInteraction.setActive(false));
document
  .getElementById("controller-polygon")
  .addEventListener("click", () => polygonInteraction.setActive(true));
