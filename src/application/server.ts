import cors from "cors";
import express, { Application } from "express";
import dotenv from "dotenv";
import * as http from "http";

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require("../../swagger.json")

import * as database from "./config/database";
import { router } from './routes/routes'

export class Server {
  private app: express.Application;
  private server?: http.Server;

  constructor() {
    dotenv.config();
    this.app = express();
  }

  public async appConfig(): Promise<void> {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use("/", router);
    this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    await database.connect();
  }

  public async getApp(): Promise<Application> {
    return this.app;
  }
  public async start(): Promise<any> {
    const PORT = process.env.PORT || 3333;
    this.server = this.app.listen(PORT, () => {
      console.log("Server running", { port: PORT, mode: process.env.NODE_ENV || "Development" });
    });
  }

  public async close(): Promise<void> {
    await database.close();

    if (this.server) {
      await new Promise((resolve, reject) => {
        this.server?.close((err) => {
          if (err) {
            return reject(err);
          }
          resolve(true);
        });
      });
    }
  }
}
