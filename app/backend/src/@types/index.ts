export * from './user';
export * from './onboard';
export * from './cohort';

export enum StatusCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  ALREADY_EXISTS = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export type GenericType = {
  [x: string]: any;
};

export type GenericAnyType = any;

export enum ResponseCode {
  SUCCESS = 1,
  FAILURE = 0,
}
