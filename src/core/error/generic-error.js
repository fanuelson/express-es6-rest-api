class GenericError extends Error {

    constructor(internalCode, payload) {
        super();
        Error.captureStackTrace(this, this.constructor);
        this.internalCode = internalCode;
        this.payload = payload;

    }

}

module.exports = GenericError;
