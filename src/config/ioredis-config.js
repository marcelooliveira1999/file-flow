import { Redis } from 'ioredis';

const ioredis = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
});

export default ioredis;
