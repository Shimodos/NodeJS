import { compare, hash } from 'bcryptjs';

export class User {
	private _password: string;

	constructor(
		public readonly _name: string,
		public readonly _email: string,
		passwordHash?: string,
	) {
		if (passwordHash) {
			this._password = passwordHash;
		}
	}

	get name(): string {
		return this._name;
	}

	get email(): string {
		return this._email;
	}

	get password(): string {
		return this._password;
	}

	public async setPassword(password: string, salt: number): Promise<void> {
		this._password = await hash(password, Number(salt));
	}

	public async comparePassword(password: string): Promise<boolean> {
		return compare(password, this._password);
	}
}
