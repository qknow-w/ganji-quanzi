/**
 * Filename: /Users/wei/Desktop/project/ganji-quanzi/server/src/app.ts
 * Path: /Users/wei/Desktop/project/ganji-quanzi/server
 * Created Date: Saturday, October 21st 2017, 10:38:47 pm
 * Author: wei
 * 
 * Copyright (c) 2017 Your Company
 */


import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";
import * as methodOverride from "method-override";
import * as config from "config";
import * as log4js from "log4js";
import { APIOutputMiddleware } from './middlewares'
import router from "./router";



log4js.configure(config.get("log"));
const logger = log4js.getLogger("http");

const app = express();

app.use(log4js.connectLogger(logger, { level: 'auto' }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: true,
  credentials: true,
}));
// add put delete method
app.use(methodOverride());
app.use(APIOutputMiddleware)
app.use(config.get("app.apiPrefix"), router);

// root /
app.get("/", function(req, res) {
  return res.send({started: new Date()});
});

// 所有路由都未匹配（404）
app.use("*", function(req, res) {
  return res.sendStatus(404);
});

if (!module.parent) {
    app.listen(config.get("app.port"), config.get("app.host"), () => {

    })
}

export default app;