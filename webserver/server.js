const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");
const publicPath = path.resolve("public");
const PORT = process.env.PORT || 5000;

// sets static files and index home page
app.use(
  express.static(publicPath, {
    index: "/presentation/index/pages/index.html",
  })
);

// routes urls
app.use(routes);

// catch and send error messages
app.use((err, req, res, next) => {
  if (err) {
    console.error(err.message);
    if (!err.statusCode) {
      err.statusCode = 500;
    } // Set 500 server code error if statuscode not set
    return res.status(err.statusCode).send({
      success: false,
      statusCode: err.statusCode,
      message: err.message,
    });
  }

  next();
});

// 404
app.use(function (req, res) {
  res.status(404).json({
    status: "Page does not exist",
  });
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
