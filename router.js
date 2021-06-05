const users = [
  { id: 1, name: 'user 1', gender: 1, group: 'A' },
  { id: 2, name: 'user 2', gender: 2, group: 'A' },
  { id: 3, name: 'user 3', gender: 3, group: 'B' },
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
