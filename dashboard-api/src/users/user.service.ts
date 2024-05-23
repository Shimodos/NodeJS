import { inject, injectable } from 'inversify';
import { userLoginDto } from './dto/user-login.dto';
import { userRegisterDto } from './dto/user-register.dto';
import { User } from './user.antty';
import { IUserService } from './user.service.interface';
import { IConfigService } from '../config/cohfig.service.interface';
import { TYPES } from '../types';
import { IUsersRepository } from './users.repository.interface';
import { UserModel } from '@prisma/client';

@injectable()
export class UserService implements IUserService {
	constructor(
		@inject(TYPES.ConfigService) private configService: IConfigService,
		@inject(TYPES.UsersRepository) private UsersRepository: IUsersRepository,
	) {
		console.log('UserService');
	}

	async createUser({ email, name, password }: userRegisterDto): Promise<UserModel | null> {
		const newUser = new User(name, email);
		const salt = this.configService.get<number>('SALT');
		console.log(salt);
		await newUser.setPassword(password, salt);
		const existedUser = await this.UsersRepository.findByEmail(email);
		if (existedUser) {
			return null;
		}
		return this.UsersRepository.create(newUser);
	}

	async validateUser({ email, password }: userLoginDto): Promise<boolean> {
		const existedUser = await this.UsersRepository.findByEmail(email);

		if (!existedUser) {
			return false;
		}
		const newUser = new User(existedUser.name, existedUser.email, existedUser.password);
		return newUser.comparePassword(password);
	}
}
