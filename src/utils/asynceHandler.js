const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    }
}

// export default asyncHandler
export {asyncHandler}


// const asyncHandler = () => {}
// const asyncHandler = (func) =>{() {}}
// const asyncHandler = (func) =>{async() {}}

// const asyncHandler = (func) => async(req, res, next) => {   
//     try{
//        await func(req, res, next)
//     }
//     catch(error){
//         req.status(error.code || 500).json({
//             success: false,
//             message: error.message || "Something went wrong"
//         })
//     }
// }