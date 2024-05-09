const notFound = (req, res, next) => {
    const error = new Error(`Not found ${req.orgianlUrl}`)
    res.status(404)
    next(error)
}

const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal Server Error"

    if(err.name === "CastError" && err.kind === 'ObjectId'){
        statusCode= 404,
        message= 'Resource not found'
    }

    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

const handleError = (statusCode, message) => {
    const error = new Error()
    error.statusCode = statusCode
    error.message = message
    return error
}

export {notFound, errorHandler, handleError}