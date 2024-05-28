import { NextFunction, Response, Request } from 'express';
import { IMiddlewares } from './middlewares.interface';
import { verify, JwtPayload } from 'jsonwebtoken';

export class AuthMiddleware implements IMiddlewares {
	constructor(private readonly secret: string) {}

	execute(req: Request, res: Response, next: NextFunction): void {
		if (req.headers.authorization) {
			const token = req.headers.authorization.split(' ')[1];
			verify(token, this.secret, (err, payload) => {
				if (err) {
					next();
				} else if (payload && typeof payload !== 'string') {
					const jwtPayload = payload as JwtPayload;
					req.user = jwtPayload.email;
					next();
				}
			});
		} else {
			next();
		}
	}
}
