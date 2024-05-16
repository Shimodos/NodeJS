import express, { Express } from 'express';
import { Server } from 'http';
import { UsersController } from './users/users.controller';
import { ExeptionFilter } from './errors/exeption.filter';
import { ILogger } from './logger/logger.interface';
import { inject, injectable } from 'inversify';
import { TYPES } from './types';
import 'reflect-metadata';

@injectable()
export class App {
  app: Express;
  port: number;
  host: string;
  server: Server;

  constructor(
    @inject(TYPES.ILogger) private logger: ILogger,
    @inject(TYPES.UsersController) private userController: UsersController,
    @inject(TYPES.ExeptionFilter) private exeptionFilter: ExeptionFilter,
  ) {
    this.app = express();
    this.port = 8000;
    this.host = 'localhost';
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
