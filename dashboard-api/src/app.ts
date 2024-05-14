import express, { Express } from 'express';
// import { userRouter } from './users/users';
import { Server } from 'http';
import { LoggerService } from './logger/logger.service';
import { UsersController } from './users/users.controller';

export class App {
  app: Express;
  port: number;
  host: string;
  server: Server;
  logger: LoggerService;
  userController: UsersController;

  constructor(logger: LoggerService, userController: UsersController) {
    this.app = express();
    this.port = 8000;
    this.host = '127.0.0.1';
    this.logger = logger;
    this.userController = userController;
  }

  useRoutes() {
    this.app.use('/users', this.userController.router);
  }

  public async init() {
    this.useRoutes();
    this.server = this.app.listen(this.port);
    this.logger.log(`Server running at http://${this.host}:${this.port}/`);
  }
}
