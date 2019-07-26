/**
 * Copyright 2019 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License'); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

const appName = require("./../package").name;
const http = require("http");
const express = require("express");
const log4js = require("log4js");
const localConfig = require("./config/local.json");
const path = require("path");
var cookieParser = require("cookie-parser");

const logger = log4js.getLogger(appName);
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../client/build")));

const server = http.createServer(app);

app.use(
  log4js.connectLogger(logger, { level: process.env.LOG_LEVEL || "info" })
);
const serviceManager = require("./services/service-manager");
require("./services/index")(app);
require("./routers/index")(app, server);

// Add your code here

const port = process.env.PORT || localConfig.port;
server.listen(port, function() {
  logger.info(`Server listening on http://localhost:${port}`);
  console.log(`Server listening on http://localhost:${port}`);
});

app.use(function(req, res, next) {
  res.sendFile(path.join(__dirname, "../public", "404.html"));
});

app.use(function(err, req, res, next) {
  res.sendFile(path.join(__dirname, "../public", "500.html"));
});
module.exports = server;
