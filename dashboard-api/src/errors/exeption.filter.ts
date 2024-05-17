import e, { NextFunction, Request, Response } from 'express';

import { IExeptionFilter } from './exeption.filter.interface';
import { HttpError } from './http-error.class';
import { inject, injectable } from 'inversify';
import { ILogger } from '../logger/logger.interface';
import { TYPES } from '../types';
import 'reflect-metadata';

@injectable()
export class ExeptionFilter implements IExeptionFilter {
	constructor(@inject(TYPES.ILogger) private logger: ILogger) {}

	catch(err: Error | HttpError, req: Request, res: Response, next: NextFunction): void {
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
