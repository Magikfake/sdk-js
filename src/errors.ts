export class BadRequestError extends Error {

    public errors: string[];
 
    constructor(message: string, errors: string[]) {
      super(message);
      this.errors = errors;
    }
}

export class TooManyRequestsError extends Error {
 
    constructor(message: string) {
      super(message);
    }
}

export class InvalidAuthorization extends Error {
 
    constructor(message: string) {
      super(message);
    }
}

export class PaymentRequired extends Error {
 
    constructor(message: string) {
      super(message);
    }
}
