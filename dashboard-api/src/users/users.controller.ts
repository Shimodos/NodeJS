import { BaseController } from '../common/base.controller';
import { HttpError } from '../errors/http-error.class';
import { ILogger } from '../logger/logger.interface';
import { NextFunction, Request, Response } from 'express';
import { TYPES } from '../types';
import { inject, injectable } from 'inversify';
import 'reflect-metadata';
@injectable()
export class UsersController extends BaseController {
  constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
    super(loggerService);
    this.bindRouts([
      { path: '/register', method: 'post', func: this.register },
      { path: '/login', method: 'post', func: this.login },
    ]);
  }

  login(req: Request, res: Response, next: NextFunction) {
    next(new HttpError(401, 'User already exists', 'login'));
  }

  register(req: Request, res: Response, next: NextFunction) {
    this.ok(res, 'User created');
  }
}
