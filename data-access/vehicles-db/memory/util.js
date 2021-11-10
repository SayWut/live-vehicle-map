/**
 * Converts a string of pointes to array of points.
 *
 * The String format has to be x1,y1|x2,y2|x3,y3 and so on
 *
 * @param {string} rawPoints - string of points
 * @returns {Array.<Array.<number>>} 2D array of points
 */
const parsePoints = (rawPoints) => {
  const pointsArray = rawPoints
    .split("|")
    .map((crn) => crn.split(","))
    .map((crn) => crn.map((c) => parseFloat(c)));

  return pointsArray;
};

/**
 * Checks if a given 2D array contains valid 2D points
 *
 * @param {Array.<Array.<any>>} points - array of points
 * @returns true if the array contains valid 2D points, false otherwise
 */
const verifyArrayPoints = (points) => {
  let isValid = true;

  points.forEach((point) => {
    const is2DPoint = point.length === 2;
    isValid &= is2DPoint;

    if (!isValid) return;

    if (is2DPoint) {
      point.forEach((param) => {
        const isTypeNumber = typeof param === "number";
        const isNotNan = !isNaN(param);
        isValid &= isTypeNumber && isNotNan;
      });
    }
  });

  return isValid;
};

const verifyPolygonPoints = (polygonPoints) =>
  verifyArrayPoints(polygonPoints) && polygonPoints.length >= 3;

module.exports = {
  parsePoints,
  verifyArrayPoints,
  verifyPolygonPoints,
};
