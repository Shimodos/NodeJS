import { Request, Response, NextFunction } from 'express';
import { IMiddlewares } from './middlewares.interface';

export class AuthGuard implements IMiddlewares {
	execute(req: Request, res: Response, next: NextFunction): void {
		if (req.user) {
			return next();
		}
		res.status(401).json({ message: 'Unauthorized' });
	}
}
