import 'reflect-metadata';
import { Container } from 'inversify';
import { IConfigService } from '../config/cohfig.service.interface';
import { IUserService } from './user.service.interface';
import { IUsersRepository } from './users.repository.interface';
import { TYPES } from '../types';
import { UserService } from './user.service';
import { UserModel } from '@prisma/client';
import { User } from './user.antty';

const ConfigServiceMock: IConfigService = {
	get: jest.fn(),
};

const UsersRepositoryMock: IUsersRepository = {
	findByEmail: jest.fn(),
	create: jest.fn(),
};

const container = new Container();
let configService: IConfigService;
let userService: IUserService;
let usersRepository: IUsersRepository;

beforeAll(() => {
	container.bind<IUserService>(TYPES.UserService).to(UserService);
	container.bind<IConfigService>(TYPES.ConfigService).toConstantValue(ConfigServiceMock);
	container.bind<IUsersRepository>(TYPES.UsersRepository).toConstantValue(UsersRepositoryMock);

	configService = container.get<IConfigService>(TYPES.ConfigService);
	userService = container.get<IUserService>(TYPES.UserService);
	usersRepository = container.get<IUsersRepository>(TYPES.UsersRepository);
});

let createUser: UserModel | null;

describe('UserService', () => {
	it('createUser', async () => {
		configService.get = jest.fn().mockReturnValue(10);
		usersRepository.create = jest.fn().mockImplementation(
			(user: User): UserModel => ({
				name: user.name,
				email: user.email,
				password: user.password,
				id: 1,
			}),
		);
		createUser = await userService.createUser({
			email: 'qq@qq.com',
			name: 'Alex',
			password: '12334',
		});
		expect(createUser?.id).toEqual(1);
		expect(createUser?.name).toEqual('Alex');
		expect(createUser?.email).toEqual('qq@qq.com');
		expect(createUser?.password).toEqual('12334');
	});
});
