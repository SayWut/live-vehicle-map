class PolygonInteraction extends ol.interaction.Draw {
  #vectorLayer;

  /**
   * Creates a single polygon interaction.
   *
   * When starts to draw new polygon clears the existing polygon.
   *
   * To view the polygon you have to add the vectorLayer property to your map.
   */
  constructor() {
    const vector = new ol.layer.Vector({
      source: new ol.source.Vector(),
      style: new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: "#51C3F7FF",
          width: 2,
        }),
        fill: new ol.style.Fill({
          color: "#51C3F750",
        }),
      }),
    });

    super({ type: "Polygon", source: vector.getSource() });

    this.#vectorLayer = vector;
    this.on("drawstart", () => {
      vector.getSource().clear();
    });
  }

  /**
   * Gets the vector layer that the polygon painted on
   */
  get vectorLayer() {
    return this.#vectorLayer;
  }
}

export { PolygonInteraction };
