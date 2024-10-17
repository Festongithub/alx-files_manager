import { createClient } from 'redis';
import { promisify } from  'util';

class RedisClient{
	constructor() {
		this.client = redis.createClient();
		this.client.on('error', (err) => {
			console.log(err));
		});
	}

	isAlive() {
		this.client.connected;
	}

	async function  get(key) {
		const value = await this.getAsync(key);
		return value;
	}

	async set(key,duration, )
