import { BadRequestException } from '../exceptions/bad-request-exception.js';
import { InsufficientStorageException } from '../exceptions/insufficient-storage-exception.js';

export const exceptionFilterMiddleware = (error, req, res, next) => {
  if (error instanceof BadRequestException) {
    return res.status(error.code).json({
      error: error.name,
      message: error.message,
      status: error.code
    });
  }

  if (error instanceof InsufficientStorageException) {
    return res.status(error.code).json({
      error: error.name,
      message: error.message,
      status: error.code
    });
  }

  res.status(500).json({
    error: 'INTERNAL_SERVER_EXCEPTION',
    message: error.message,
    status: 500
  });
};
