const { check, validationResult } = require('express-validator')


exports.validate = [
    check('name').isLength({min:1}).withMessage("field is required"),
    check('email').isEmail(),
    check('subject').isLength({min:1}).withMessage("field is required"),
    check('message').isLength({min:1}).withMessage("field is required"),

    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
          let newError
          errors.errors.forEach( error => {
              let errorObj = {}
              errorObj[`${error.param}`] = error.msg
              newError = {...newError, ...errorObj}
          })
          console.log(newError)
          
          res.render('landing', {errors})
        }
        
        next()
    }
]



