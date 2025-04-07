import { readdir, stat } from 'fs/promises';
import { join } from 'path';
import { InsufficientStorageException } from '../../exceptions/insufficient-storage-exception.js';

/**
 * Tamanho maximo em BYTES que o diretorio pode armazenar (10 GB)
 */
const MAX_SIZE_BYTES = 10 * 1024 * 1024 * 1024;

class UploadDiskMiddleware {
  async checkSpace(req, res, next) {
    try {
      const uploadDirectory = './uploads';
      const currenctSize = await UploadDiskMiddleware.getDirectorySize(
        uploadDirectory
      );

      if (currenctSize >= MAX_SIZE_BYTES) {
        throw new InsufficientStorageException(
          'Expaço para upload excedido. Tente novamente mais tarde.'
        );
      }

      next();
    } catch (error) {
      next(error);
    }
  }

  static async getDirectorySize(path) {
    const files = await readdir(path);
    const sizes = await Promise.all(
      files.map(async (file) => {
        const { size } = await stat(join(path, file));

        return size;
      })
    );

    return sizes.reduce((acc, cur) => acc + cur, 0);
  }
}

export default new UploadDiskMiddleware();
