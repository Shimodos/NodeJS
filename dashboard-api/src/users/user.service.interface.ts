import { userLoginDto } from './dto/user-login.dto';
import { userRegisterDto } from './dto/user-register.dto';
import { User } from './user.antty';

export interface IUserService {
	createUser: (dto: userRegisterDto) => Promise<User | null>;
	validateUser: (dto: userLoginDto) => Promise<boolean>;
}
