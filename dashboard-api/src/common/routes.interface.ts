import { NextFunction, Request, Response, Router } from 'express';
import { IMiddlewares } from './middlewares.interface';

export interface IControllerRoute {
	path: string;
	func: (req: Request, res: Response, next: NextFunction) => void;
	method: keyof Pick<Router, 'get' | 'post' | 'put' | 'delete' | 'patch'>;
	middlewares?: IMiddlewares[];
}

export type ExpressReturnType = Response<any, Record<string, any>>;
