const { body, validationResult } = require("express-validator");

  function validate() {
    return [
      body("name")
        .isString()
        .withMessage("Please enter a valid name"),
      body("email").isEmail(),
      body("message"),
      (req, res, next) => {
        const errors = validationResult(req);
        req.validationErrors = () => errors.array();
        next();
      },
    ];
  }


module.exports = {validate};