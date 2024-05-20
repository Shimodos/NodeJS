import { injectable } from 'inversify';
import { userLoginDto } from './dto/user-login.dto';
import { userRegisterDto } from './dto/user-register.dto';
import { User } from './user.antty';
import { IUserService } from './user.service.interface';

@injectable()
export class UserService implements IUserService {
	async createUser({ email, name, password }: userRegisterDto): Promise<User | null> {
		const newUser = new User(name, email);
		await newUser.setPassword(password);
		return null;
	}

	async validateUser(dto: userLoginDto): Promise<boolean> {
		return true;
	}
}
