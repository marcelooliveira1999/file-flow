import uploadUseCase from './use-case/upload-use-case.js';

class FileFlowController {
  async upload(req, res, next) {
    try {
      const { user, file } = req;
      const result = await uploadUseCase.execute(file, user);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default new FileFlowController();
