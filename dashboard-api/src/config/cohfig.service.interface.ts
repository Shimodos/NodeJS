export interface IConfigService {
	get: <T extends string | number>(key: string) => T;
	// set: <T>(key: string, value: T) => void;
}
