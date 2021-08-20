const { check, validationResult } = require('express-validator')


exports.validate = [
    check('name')
    .trim()
    .isLength({min:1})
    .withMessage("field is required"),

    check('email').isEmail(),
    
    check('subject')
    .trim()
    .isLength({min:1})
    .withMessage("field is required"),
    
    check('message')
    .trim()
    .isLength({min:1})
    .withMessage("field is required"),

    (req, res, next) => {
        let errors = validationResult(req)
        if (!errors.isEmpty()) {
          let newError
          errors.errors.forEach( error => {
              let errorObj = {}
              errorObj[`${error.param}`] = error.msg
              newError = {...newError, ...errorObj}
          })
          errors = newError
          
          res.render('landing', {errors})
        }
        
        next()
    }
]



