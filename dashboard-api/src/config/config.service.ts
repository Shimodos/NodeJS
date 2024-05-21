import { inject, injectable } from 'inversify';
import { ILogger } from '../logger/logger.interface';
import { IConfigService } from './cohfig.service.interface';
import { DotenvConfigOutput, DotenvParseOutput, config } from 'dotenv';
import { TYPES } from '../types';

@injectable()
export class ConfigService implements IConfigService {
	private envConfig: DotenvParseOutput;

	constructor(@inject(TYPES.ILogger) private logger: ILogger) {
		const result: DotenvConfigOutput = config();
		if (result.error) {
			this.logger.error('[ConfigService] Error loading .env file', result.error);
		} else {
			this.logger.log('[ConfigService] Loaded .env file');
			this.envConfig = result.parsed as DotenvParseOutput;
		}
	}

	get<T extends number | string>(key: string): T {
		return this.envConfig[key] as T;
	}
}
