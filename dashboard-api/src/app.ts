import express, { Express } from 'express';
import { userRouter } from './users/users';
import { Server } from 'http';
import { LoggerService } from './logger/logger.service';

export class App {
  app: Express;
  port: number;
  host: string;
  server: Server;
  logger: LoggerService;

  constructor(logger: LoggerService) {
    this.app = express();
    this.port = 8000;
    this.host = '127.0.0.1';
    this.logger = logger;
  }

  useRoutes() {
    this.app.use('/users', userRouter);
  }

  public async init() {
    this.useRoutes();
    this.server = this.app.listen(this.port);
    this.logger.log(`Server running at http://${this.host}:${this.port}/`);
  }
}
