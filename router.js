const users = [
  { id: 1, name: 'user 1' },
  { id: 2, name: 'user 2' },
  { id: 3, name: 'user 3' },
]

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
        responseData: JSON.stringify(users),
      }
    default:
      return {
        statusCode: 404,
        responseData: 'Not Found',
      }
  }
}

module.exports = router
