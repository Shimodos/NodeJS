import { App } from '../src/app';
import { boot } from '../src/main';
import request from 'supertest';

let application: App;

beforeAll(async () => {
	const { app } = await boot;
	application = app;
});

describe('Users e2e', () => {
	it('Register - error', async () => {
		const res = await request(application.app)
			.post('/users/register')
			.send({ email: 'sdd@sas1.com', password: '1234' });
		expect(res.status).toEqual(422);
	});

	//test login

	it('Login - succes', async () => {
		const res = await request(application.app)
			.post('/users/login')
			.send({ email: 'sdd@sas1.com', password: 'dhghfgdfg' });
		expect(res.body.token).not.toBeUndefined();
	});

	it('Login - error', async () => {
		const res = await request(application.app)
			.post('/users/login')
			.send({ email: 'sdd@sas1.com', password: '1' });
		expect(res.statusCode).toBe(401);
	});

	// test info

	it('Info - succes', async () => {
		const login = await request(application.app)
			.post('/users/login')
			.send({ email: 'sdd@sas1.com', password: 'dhghfgdfg' });
		const res = await request(application.app)
			.get('/users/info')
			.set('Authorization', `Bearer ${login.body.token}`);
		expect(res.body.email).toBe('sdd@sas1.com');
	});

	it('Info - error', async () => {
		const res = await request(application.app)
			.get('/users/info')
			.set('Authorization', `Bearer ${1}`);
		expect(res.statusCode).toBe(401);
	});
});

afterAll(() => {
	application.close();
});
