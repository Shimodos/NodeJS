import { IsEmail, IsString } from 'class-validator';

export class userRegisterDto {
	@IsEmail({}, { message: 'Invalid email' })
	email: string;

	@IsString({ message: 'Invalid password' })
	password: string;

	@IsString({ message: 'Invalid name' })
	name: string;
}
