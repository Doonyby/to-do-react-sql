import express from "express";
import path from "path";

import webpack from "webpack";
import webpackMiddleware from "webpack-dev-middleware";
import webpackConfig from "../webpack.config.js";

let app = express();

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get('*/', (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

app.listen(8080, () => console.log("Running on localhost: 8080"));