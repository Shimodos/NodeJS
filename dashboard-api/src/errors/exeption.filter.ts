import e, { NextFunction, Request, Response } from 'express';
import { LoggerService } from '../logger/logger.service';
import { IExeptionFilter } from './exeption.filter.interface';
import { HttpError } from './http-error.class';

export class ExeptionFilter implements IExeptionFilter {
  logger: LoggerService;
  constructor(logger: LoggerService) {
    this.logger = logger;
  }
  catch(err: Error | HttpError, req: Request, res: Response, next: NextFunction) {
    if (err instanceof HttpError) {
      this.logger.error(`[${err.context}] Error ${err.status} : ${err.message}`);
      res.status(err.status).send(err.message);
      res.status(err.status).send(`Error: ${err.message}`);
    } else {
      this.logger.error(`Error: ${err.message}`);
      res.status(500).send(`Error: ${err.message}`);
    }
  }
}
