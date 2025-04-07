import { Router } from 'express';
import fileFlowController from './file-flow-controller.js';
import checkUploadDirectorySpaceMiddleware from './middleware/check-upload-directory-space-middleware.js';
import multerConfigUploadMiddleware from './middleware/multer-config-upload-middleware.js';

const fileFlowRouter = Router();

fileFlowRouter.post(
  '/upload',
  checkUploadDirectorySpaceMiddleware.checkSpace,
  multerConfigUploadMiddleware.single('file'),
  fileFlowController.upload
);

export default fileFlowRouter;
