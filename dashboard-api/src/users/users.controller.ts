import { BaseController } from '../common/base.controller';
import { HttpError } from '../errors/http-error.class';
import { ILogger } from '../logger/logger.interface';
import { NextFunction, Request, Response } from 'express';
import { TYPES } from '../types';
import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { IUserController } from './users.controller.interface';
import { userLoginDto } from './dto/user-login.dto';
import { userRegisterDto } from './dto/user-register.dto';
import { ValidateMiddleware } from '../common/validate.middlewares';
import { sign } from 'jsonwebtoken';
import { IConfigService } from '../config/cohfig.service.interface';
import { IUserService } from './user.service.interface';
import { AuthGuard } from '../common/auth.guard';

@injectable()
export class UsersController extends BaseController implements IUserController {
	constructor(
		@inject(TYPES.ILogger) private loggerService: ILogger,
		@inject(TYPES.UserService) private userService: IUserService,
		@inject(TYPES.ConfigService) private configService: IConfigService,
	) {
		super(loggerService);
		this.bindRouts([
			{
				path: '/register',
				method: 'post',
				func: this.register,
				middlewares: [new ValidateMiddleware(userRegisterDto)],
			},
			{
				path: '/login',
				method: 'post',
				func: this.login,
				middlewares: [new ValidateMiddleware(userLoginDto)],
			},
			{
				path: '/info',
				method: 'get',
				func: this.info,
				middlewares: [new AuthGuard()],
			},
		]);
	}

	async login(
		req: Request<{}, {}, userLoginDto>,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		const result = await this.userService.validateUser(req.body);
		if (!result) {
			return next(
				new HttpError(
					401,
					'Authentication failed, check your credentials or register a new account',
					'login',
				),
			);
		}
		const token = await this.signToken(req.body.email, this.configService.get('JWT_SECRET'));
		this.ok(res, { token });
	}

	async register(
		{ body }: Request<{}, {}, userRegisterDto>,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		const result = await this.userService.createUser(body);
		if (!result) {
			return next(new HttpError(422, 'The user already exists '));
		}
		this.ok(res, { email: result.email, id: result.id });
	}

	async info({ user }: Request<{}>, res: Response, next: NextFunction): Promise<void> {
		const userInfo = await this.userService.getUserByEmail(user);
		this.ok(res, { email: userInfo?.email, id: userInfo?.id });
	}

	private signToken(email: string, secret: string): Promise<string> {
		//retern Promise<string>
		return new Promise<string>((resolve, reject) => {
			sign(
				{ email, iat: Math.floor(Date.now() / 1000) },
				secret,
				{ algorithm: 'HS256' },
				(err, token) => {
					if (err) reject(err);
					resolve(token as string);
				},
			);
		});
	}
}
