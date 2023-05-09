class HttpException {}

class DuplicateException extends HttpException {
  constructor(message, stack = null) {
    super();
    this.code = 409;
    this.message = message;
    this.stack = stack;
  }
}

class UnauthorizedException extends HttpException {
  constructor(stack = null) {
    super();
    this.code = 401;
    this.message = 'Unauthorized';
    this.stack = stack;
  }
}

class BadRequestException extends HttpException {
  constructor(message, stack = null) {
    super();
    this.code = 400;
    this.message = message;
    this.stack = stack;
  }
}

module.exports = {
  HttpException,
  DuplicateException,
  UnauthorizedException,
  BadRequestException,
};
