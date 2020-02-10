
/** Users Controller Class */
class UsersController {
  /**
   * @desc POST /api/v1/auth/verify
   * @param {object} req
   * @param {object} res
   * @memberof UsersController
   * @returns users
   */
  static async fetchUsersByLanguage(req, res) {
    try {
      const { usernameString, languages } = req.params;

      return res.status(200).json({
        message: 'Success',
        success: true,
        usernameString,
        languages,
      });
    } catch (err) {
      return res.status(500).json({
        message: 'An unknown error occured,this could be a server error',
        success: false,
      });
    }
  }
}

export default UsersController;
