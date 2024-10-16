#!/usr/bin/node

const { createClient } = require('redis');

class RedisClient {
  constructor() {
    this.client = createClient();
    this.client.on('error', (err) => console.log(err));
    this.connected = false;
    this.client.on('connect', () => {
      this.connected = true;
    });
  }

  isAlive() {
    return this.client.connected;
  }

  async get(key) {
    const val = await this.getAsync(key);
    return val;
  }

  async set(key, value, dur) {
    this.client.setex(key, dur, value);
  }

  async del(key) {
    this.client.del(key);
  }
}

const redisClient = new RedisClient();
export default redisClient;
