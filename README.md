# User search API

[![Build Status](https://travis-ci.com/julietezekwe/github_users_search_api.svg?branch=develop)](https://travis-ci.com/julietezekwe/github_users_search_api) [![Coverage Status](https://coveralls.io/repos/github/julietezekwe/github_users_search_api/badge.svg?branch=develop)](https://coveralls.io/github/julietezekwe/github_users_search_api?branch=develop) [![Maintainability](https://api.codeclimate.com/v1/badges/17f4095ba43a549dadee/maintainability)](https://codeclimate.com/github/julietezekwe/github_users_search_api/maintainability)

## Introduction
An API endpoint to search for GitHub users by specifying a programming
language they use in their public repositories and a username string.
This API accepts Multiple programming languages as a fallback.

A fallback should be considered when:
- There are zero results for a language
- A timeout occurred

## Table of Contents
1. <a href="#hosted-app">Link to Hosted App</a>
4. <a href="#application-features">Application Features</a>
5. <a href="#how-to-use">How To Use</a>
6. <a href="#author">Author</a>
7. <a href="#license">License</a>


## Link to Hosted App
* [API link](https://user-search-api-2020.herokuapp.com/)

## Tech Stack Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)


## Application Features

*  An endpoint to fetch users by specifying some or all the username and a programming language
*  The ability to add fallback languages in case the default language times out or returns no users


## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/julietezekwe/github_users_search_api.git

# Go into the repository
$ cd github_users_search_api

# Install dependencies
$ npm install

# Create .env file for environmental variables in your root directory like the sample.env file and provide the keys

# Run the app
$ npm start

# Check the port on the specified port on the env or 9000

# To run the app on Docker, you must have docker installed locally and running
$ npm run docker:build
$ npm run docker

# Run test
$ npm run test
```

## API endpoints
```
GET Request -> localhost:9000/api/v1/users/{usernameString}/{language}?fallbacks={optional language fallbacks}

response:
{
    "message": "Successfully retrieves users",
    "success": true,
    "result": {
        "users": [
            {
                "login": "julietezekwe",
                "id": 29522498,
                "node_id": "MDQ6VXNlcjI5NTIyNDk4",
                "avatar_url": "https://avatars3.githubusercontent.com/u/29522498?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/julietezekwe",
                "html_url": "https://github.com/julietezekwe",
                "followers_url": "https://api.github.com/users/julietezekwe/followers",
                "following_url": "https://api.github.com/users/julietezekwe/following{/other_user}",
                "gists_url": "https://api.github.com/users/julietezekwe/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/julietezekwe/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/julietezekwe/subscriptions",
                "organizations_url": "https://api.github.com/users/julietezekwe/orgs",
                "repos_url": "https://api.github.com/users/julietezekwe/repos",
                "events_url": "https://api.github.com/users/julietezekwe/events{/privacy}",
                "received_events_url": "https://api.github.com/users/julietezekwe/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Chidimma Juliet Ezekwe",
                "company": null,
                "blog": "",
                "location": "Lagos, Nigeria",
                "email": "julietezekwe@gmail.com",
                "hireable": true,
                "bio": "Software Developer @Andela",
                "public_repos": 45,
                "public_gists": 0,
                "followers": 18,
                "following": 48,
                "created_at": "2017-06-18T17:06:20Z",
                "updated_at": "2020-02-10T17:24:10Z",
                "private_gists": 0,
                "total_private_repos": 3,
                "owned_private_repos": 3,
                "disk_usage": 37214,
                "collaborators": 1,
                "two_factor_authentication": false,
                "plan": {
                    "name": "free",
                    "space": 976562499,
                    "collaborators": 0,
                    "private_repos": 10000
                },
                "username": "julietezekwe"
            }
        ],
        "programmingLanguage": "javascript",
        "fromFallBack": true,
        "totalCount": 1
    }
}

```
## Recommended improvements

* The api response can be cached to improve the application performance
  and avoid refetching whas been fetched; The caching can be done with Redis.
* The response can also be paginated for readability when the response gets longer.

## Author

Chidimma Juliet Ezekwe

## License

MIT

---
