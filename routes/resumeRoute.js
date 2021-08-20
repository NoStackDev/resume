const router = require('express').Router()
const formController = require('../controllers/formController')
const validate = require('../middlewares/validate').validate
const { check } = require('express-validator')


router.route('/').get((req, res) => {
  res.render('landing')
})

router.route('/').post(validate, formController.formSubmit)

module.exports = router

