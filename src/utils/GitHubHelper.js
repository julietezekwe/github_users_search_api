import axios from 'axios';


/**
   * Creates an instance of GitHubHelper.
   */
class GitHubHelper {
  /**
   * Creates an instance of GitHubHelper.
   * @param {object} param
   * @memberof GitHubHelper
   */
  constructor() {
    this.request = axios.create({
      headers: {
        Authorization: `token ${process.env.GITHUB_OAUTH_TOKEN}`,
      },
    });
  }

  /**
   * Retrieves user details using languages as search query and user string
   * @param {number} - id
   *@returns {object} - user
   */
  async searchUsersByLanguage(username, language) {
    try {
      const user = await this.request.get(`${process.env.GITHUB_BASE_URL}/search/users?q=${username}+language:${language}`);
      return user.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Retrieves user details using languages as search query and user string
   * @param {Array} - users
   *@returns {object} - user
   */
  async retrieveUserDetails(users) {
    const userURLs = users.map(user => user.url);

    const userDetails = await Promise
      .all(userURLs.map(async (userURL) => {
        const { data: userDetail } = await this.request.get(userURL);
        userDetail.username = userDetail.login;
        return userDetail;
      }));
    return userDetails;
  }
}

export default GitHubHelper;
