const express = require('express')
const router = express.Router()

const app = express()

router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

router.get('/backend', function (req, res) {
  res.status(200).json({ message: 'all ok from the backend' })
  console.log('backend ok')
})

module.exports = {
  path: '/api',
  handler: router,
}
