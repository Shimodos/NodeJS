import { IsEmail, IsString } from 'class-validator';

export class userLoginDto {
	@IsEmail({}, { message: 'Invalid email' })
	email: string;

	@IsString()
	password: string;
}
