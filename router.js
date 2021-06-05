const router = (pathname) => {
  switch (pathname) {
    case '/':
      return {
        statusCode: 200,
        responseData: 'Hello World',
      }
    default:
      return {
        statusCode: 404,
        responseData: 'Not Found',
      }
  }
}

module.exports = router
