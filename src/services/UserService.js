/* eslint-disable no-await-in-loop */
import GitHubHelper from '../utils/GitHubHelper';

/**
   * Creates an instance of UserService.
   */
class UserService {
  /**
   * Creates an instance of UserService.
   * @param {object} param
   * @memberof UserService
   */
  constructor() {
    this.gitHubHelper = new GitHubHelper();
  }

  /**
   * Retrieves user details
   * @param {number} - id
   *@returns {object} - user
   */
  async fetchUsersByLanguage(username, language, fallbacks = '') {
    try {
      let users;
      let userDetails = {};
      users = await this.gitHubHelper.searchUsersByLanguage(username, language);

      users.fromFallBack = false;
      users.language = language;
      if (!users.total_count && fallbacks.length) {
        const fallBackArr = fallbacks.split(',');
        for (let index = 0; index < fallBackArr.length; index += 1) {
          users = await this.gitHubHelper
            .searchUsersByLanguage(username, fallBackArr[index]);
          if (users.total_count) {
            users.fromFallBack = true;
            users.language = fallBackArr[index];
            break;
          }
        }
      }
      const { language: programmingLanguage, fromFallBack, total_count: totalCount } = users;
      if (totalCount) {
        const data = await this.gitHubHelper.retrieveUserDetails(users.items);
        userDetails = {
          users: data,
          programmingLanguage,
          fromFallBack,
          totalCount,
        };
      }
      return userDetails;
    } catch (error) {
      throw error;
    }
  }
}
export default UserService;
