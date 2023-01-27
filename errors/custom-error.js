class customAPIError extends Error {
    constructor(meesgae, statusCode) {
        super(this.message)
        this.statusCode = statusCode

    } 
}

const createCustomError = (msg, statusCode) => {
    return new customAPIError(msg, statusCode)
}

module.exports = {createCustomError, customAPIError}