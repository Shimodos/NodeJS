import { inject, injectable } from 'inversify';
import { userLoginDto } from './dto/user-login.dto';
import { userRegisterDto } from './dto/user-register.dto';
import { User } from './user.antty';
import { IUserService } from './user.service.interface';
import { IConfigService } from '../config/cohfig.service.interface';
import { TYPES } from '../types';

@injectable()
export class UserService implements IUserService {
	constructor(@inject(TYPES.ConfigService) private configService: IConfigService) {
		console.log('UserService');
	}

	async createUser({ email, name, password }: userRegisterDto): Promise<User | null> {
		const newUser = new User(name, email);
		const salt = this.configService.get<number>('SALT');
		console.log(salt);
		await newUser.setPassword(password, salt);
		return null;
	}

	async validateUser(dto: userLoginDto): Promise<boolean> {
		return true;
	}
}
