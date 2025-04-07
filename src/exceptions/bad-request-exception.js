export class BadRequestException extends Error {
  constructor(message) {
    super(message);

    this.name = 'BAD_REQUEST_EXCEPTION';
    this.code = 400;
  }
}
