import UserService from '../services/UserService';

/** Users Controller Class */
class UsersController {
  /**
   * @desc POST /api/v1/auth/verify
   * @param {object} req
   * @param {object} res
   * @memberof UsersController
   * @returns users
   */
  static async fetchUsers(req, res) {
    try {
      const { usernameString, language } = req.params;
      const { fallbacks } = req.query;
      const userService = new UserService();
      const result = await userService.fetchUsersByLanguage(usernameString, language, fallbacks);

      if (!result.totalCount) {
        return res.status(200).json({
          message: 'There are no users who match the search queries, please try including falsbacks',
          success: true,
          users: {},
        });
      }
      return res.status(200).json({
        message: 'Successfully retrieves users',
        success: true,
        result,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'An unknown error occured,this could be a server error',
        success: false,
      });
    }
  }
}

export default UsersController;
