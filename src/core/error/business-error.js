export class BusinessError extends Error {

    constructor(internalCode, payload, message = 'Business Error') {
        super();
        Error.captureStackTrace(this, this.constructor);
        this.message = message;
        this.internalCode = internalCode;
        this.payload = payload;
        this.isBusinessError = true;
    }

}
