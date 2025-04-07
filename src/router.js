import { Router } from 'express';
import fileFlowRouter from './file-flow/file-flow-router.js';

const appRouter = Router();
appRouter.use('/file-flow', fileFlowRouter);

export default appRouter;
