class MarkersLayer extends ol.layer.Vector {
  /**
   * Creates a new layer of markers by giving points
   *
   * @param {Array.<Array.<number>>} markersLonLatCoordinates longitude and latitude points of the markers
   * @param {string} imgSrc the image resource path that will represent the markers
   */
  constructor(markersLonLatCoordinates, imgSrc) {
    const markersFeatures = [];

    for (let i = 0; i < markersLonLatCoordinates.length; i++) {
      const markerFeature = new ol.Feature({
        geometry: new ol.geom.Point(
          ol.proj.fromLonLat(markersLonLatCoordinates[i])
        ),
      });

      markersFeatures.push(markerFeature);
    }

    super({
      source: new ol.source.Vector({
        features: markersFeatures,
      }),
      style: new ol.style.Style({
        image: new ol.style.Icon({
          anchor: [0.5, 46],
          anchorXUnits: "fraction",
          anchorYUnits: "pixels",
          src: imgSrc,
        }),
      }),
    });
  }
}

export { MarkersLayer };
