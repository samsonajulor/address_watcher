import { StatusCode } from '../@types';

export default class ApiError extends Error {
  public log: string;
  public methodName: string | undefined;
  public httpCode: StatusCode;

  constructor(
    log: string,
    message: string | unknown = log,
    methodName?: string,
    httpCode = StatusCode.INTERNAL_SERVER_ERROR
  ) {
    super(<string>message);
    Object.setPrototypeOf(this, new.target.prototype);

    this.log = log;
    if (methodName) this.methodName = methodName;
    this.httpCode = httpCode;
    this.message = <string>message;

    Error.captureStackTrace(this);
  }
}
