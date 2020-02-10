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
      language,
    } = req.params;
    const { fallbacks } = req.query;
    if (typeof usernameString.trim() !== 'string' && typeof language.trim() !== 'string') {
      return res.status(400).json({
        message: 'invalid parameter, please provide a valid string',
        success: false,
      });
    }
    if (usernameString.trim().length < 1 || language.trim().length < 1) {
      return res.status(400).json({
        message: 'invalid parameter,please provide a valid string',
        success: false,
      });
    }
    const checkParam = (parameters) => {
      const params = parameters.split(',');
      params.forEach((param) => {
        if (typeof param.trim() !== 'string') {
          return res.status(400).json({
            message: 'invalid parameter, Please make sure all provided params are valid strings',
            success: false,
          });
        }
        return true;
      });
      return next();
    };
    if (fallbacks) checkParam(fallbacks);
  }
}

export default Validator;
