const errors = require('../const/error');

module.exports = function(err,req,res, next){

    let response = {
        success: false,
        error: {
            code:err.code || 500,
            message: err.message || 'Internal server error'
        }
    }

    if ( err.isJoi){
         let validationErrortype = err.details[0].validationErrortype
         let errorKey = 'validationError'

         if (validationErrortype === 'any.required'){
            errorKey = 'FaltanCampos'
         }

         response.error.code = errors[errorKey].code
         response.error.message = errors[errorKey].message
    }

    if( err.message === 'Not Found'){
        response.error.code = 404
        response.error.message = 'Not Found'
    }
    res.status(200).json(response)
}