class ApiError extends Error {
  constructor(
    statusCode, 
    message = "Something went wrong",
    errors = [],
    statack = ""
  ){
    super(message)
    this.statusCode = statusCode
    this.data = null
    this.message = message
    this.success = false
    this.errors = errors

    // Don't want to show the stack trace to the user and think
    if(statack){
        this.stack = statack
    }
    else{
        Error.captureStackTrace(this, this.constructor)
    }
  }
}

export { ApiError }