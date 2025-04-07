export class InsufficientStorageException extends Error {
  constructor(message) {
    super(message);

    this.name = 'INSUFFICIENT_STORAGE_EXCEPTION';
    this.code = 507;
  }
}
