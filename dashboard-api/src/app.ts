import express, { Express } from 'express';
// import { userRouter } from './users/users';
import { Server } from 'http';
import { LoggerService } from './logger/logger.service';
import { UsersController } from './users/users.controller';
import { ExeptionFilter } from './errors/exeption.filter';

export class App {
  app: Express;
  port: number;
  host: string;
  server: Server;
  logger: LoggerService;
  userController: UsersController;
  exeptionFilter: ExeptionFilter;

  constructor(
    logger: LoggerService,
    userController: UsersController,
    exeptionFilter: ExeptionFilter,
  ) {
    this.app = express();
    this.port = 8000;
    this.host = 'localhost';
    this.logger = logger;
    this.userController = userController;
    this.exeptionFilter = exeptionFilter;
  }

  useRoutes() {
    this.app.use('/users', this.userController.router);
  }

  useExeptionFilter() {
    this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter));
  }

  public async init() {
    this.useRoutes();
    this.useExeptionFilter();
    this.server = this.app.listen(this.port);
    this.logger.log(`Server running at http://${this.host}:${this.port}/`);
  }
}
