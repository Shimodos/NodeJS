import { BaseController } from '../common/base.controller';
import { HttpError } from '../errors/http-error.class';
import { ILogger } from '../logger/logger.interface';
import { NextFunction, Request, Response } from 'express';
import { TYPES } from '../types';
import { id, inject, injectable } from 'inversify';
import 'reflect-metadata';
import { IUserController } from './users.controller.interface';
import { userLoginDto } from './dto/user-login.dto';
import { userRegisterDto } from './dto/user-register.dto';
import { User } from './user.antty';
import { UserService } from './user.service';
import { ValidateMiddleware } from '../common/validate.middlewares';

@injectable()
export class UsersController extends BaseController implements IUserController {
	constructor(
		@inject(TYPES.ILogger) private loggerService: ILogger,
		@inject(TYPES.UserService) private userService: UserService,
	) {
		super(loggerService);
		this.bindRouts([
			{
				path: '/register',
				method: 'post',
				func: this.register,
				middlewares: [new ValidateMiddleware(userRegisterDto)],
			},
			{ path: '/login', method: 'post', func: this.login },
		]);
	}

	login(req: Request<{}, {}, userLoginDto>, res: Response, next: NextFunction): void {
		console.log(req.body);
		next(new HttpError(401, 'User already exists', 'login'));
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
}
