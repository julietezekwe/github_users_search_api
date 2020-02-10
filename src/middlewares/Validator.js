/** Validates inputs class */
class Validator {
  /**
     * @static
     * @param {object} req
     * @param {object} res
     * @param {function} next
     * @memberof Validator
     * @returns {function} next
     */
  // eslint-disable-next-line consistent-return
  static paramsChecker(req, res, next) {
    const {
      usernameString,
      languages,

    } = req.params;
    if (typeof usernameString !== 'string' && typeof languages !== 'string') {
      return res.status(400).json('invalid parameter, please provide a valid string');
    }
    const checkParam = (parameters) => {
      const params = parameters.split(',');
      params.forEach((param) => {
        if (typeof param.trim() !== 'string') {
          return res.status(400).json('invalid parameter, Please make sure all provided params are valid strings');
        }
        return true;
      });
      return next();
    };
    checkParam(usernameString);
    checkParam(languages);
  }
}

export default Validator;
