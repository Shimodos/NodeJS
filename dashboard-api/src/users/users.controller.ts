import { BaseController } from '../common/base.controller';
import { LoggerService } from '../logger/logger.service';
import { UserService } from './users.interface';
import { NextFunction, Request, Response } from 'express';

export class UsersController extends BaseController {
  constructor(
    // private userService: UserService,
    logger: LoggerService,
  ) {
    super(logger);
    this.bindRouts([
      { path: '/register', method: 'post', func: this.register },
      { path: '/login', method: 'post', func: this.login },
    ]);
  }

  login(req: Request, res: Response, neat: NextFunction) {
    this.ok(res, 'Login');
  }

  register(req: Request, res: Response, neat: NextFunction) {
    this.ok(res, 'Register');
  }
}
