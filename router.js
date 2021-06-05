const users = require('./users')

const router = (pathname) => {
  switch (pathname) {
    case '/':
      return {
        statusCode: 200,
        responseData: 'Hello World',
      }
    case '/users':
      return {
        statusCode: 200,
        responseData: users,
      }
    default:
      return {
        statusCode: 404,
        responseData: 'Not Found',
      }
  }
}

module.exports = router
