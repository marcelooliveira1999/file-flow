import { Queue } from 'bullmq';

const fileFlowQueue = new Queue('file_flow', {
  defaultJobOptions: {
    removeOnComplete: true,
    removeOnFail: true
  },
  connection: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
  }
});

export default fileFlowQueue;
