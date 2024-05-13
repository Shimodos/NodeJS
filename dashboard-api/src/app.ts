import express, { Express } from 'express';
import { userRouter } from './users/users';
import { Server } from 'http';

export class App {
  app: Express;
  port: number;
  host: string;
  server: Server;

  constructor() {
    this.app = express();
    this.port = 8000;
    this.host = '127.0.0.1';
  }

  useRoutes() {
    this.app.use('/users', userRouter);
  }

  public async init() {
    this.useRoutes();
    // this.app.listen(this.port, () => {
    //   console.log(`Server running at http://${this.host}:${this.port}/`);
    // });
    this.server = this.app.listen(this.port, () => {
      console.log(`Server running at http://${this.host}:${this.port}/`);
    });
  }
}
