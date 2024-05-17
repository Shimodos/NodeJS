import { LoggerService } from '../logger/logger.service';
import { Router, Response } from 'express';
import { ExpressReturnType, IControllerRoute } from './routes.interface';
import { ILogger } from '../logger/logger.interface';
import { injectable } from 'inversify';
import 'reflect-metadata';

@injectable()
export abstract class BaseController {
	private _router: Router = Router();
	constructor(private logger: ILogger) {
		this._router = Router();
	}

	get router(): Router {
		return this._router;
	}

	public send<T>(res: Response, code: number, message: T): ExpressReturnType {
		res.type('application/json');
		return res.status(code).json(message);
	}

	public ok<T>(res: Response, message: T): ExpressReturnType {
		return this.send<T>(res, 200, message);
	}

	public created(res: Response): ExpressReturnType {
		return res.sendStatus(201);
	}

	protected bindRouts(routes: IControllerRoute[]): void {
		for (const route of routes) {
			this.logger.log(`Binding route ${route.method.toUpperCase()} ${route.path}`);
			const headler = route.func.bind(this); // bind the function to the controller
			this.router[route.method](route.path, route.func, headler);
		}
	}
}
