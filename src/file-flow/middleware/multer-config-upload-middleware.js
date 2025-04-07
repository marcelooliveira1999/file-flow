import { existsSync, mkdirSync } from 'fs';
import multer, { diskStorage } from 'multer';
import { extname } from 'path';
import { BadRequestException } from '../../exceptions/bad-request-exception.js';

class MulterConfigUploadMiddleware {
  /**
   * Tamanho maximo em BYTES que o diretorio pode armazenar (10 GB)
   */
  MAX_SIZE_BYTES = 10 * 1024 * 1024 * 1024;

  constructor() {
    this.uploadDirectory = './uploads';

    if (!existsSync(this.uploadDirectory)) {
      mkdirSync(this.uploadDirectory, {
        recursive: true
      });
    }

    this.storage = diskStorage({
      destination: (req, file, cb) => {
        cb(null, this.uploadDirectory);
      },
      filename: (req, { originalname }, cb) => {
        const timestamps = Date.now();
        const sanitized = originalname.replace(/\s+/g, '-');
        const filename = `${timestamps}-${sanitized}`;
        cb(null, filename);
      }
    });

    this.filter = (req, { originalname }, cb) => {
      const ext = extname(originalname).toLowerCase();
      const allowedFileTypes = ['xlsx', 'xls'];

      if (allowedFileTypes.includes(ext)) {
        cb(null, true);
      } else {
        const error = new BadRequestException(
          'Tipo de arquivo não permitido. Apenas arquivos Excel são aceitos.'
        );

        cb(error, null);
      }
    };

    this.multer = multer({
      storage: this.storage,
      fileFilter: this.filter,
      limits: {
        fileSize: this.MAX_SIZE_BYTES
      }
    });
  }

  single(fieldName) {
    return this.multer.single(fieldName);
  }
}

export default new MulterConfigUploadMiddleware();
