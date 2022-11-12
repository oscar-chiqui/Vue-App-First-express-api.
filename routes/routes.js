let express = require('express')
let router = express.Router()

router.get('/', function(req, res, next) {
    res.json({'message': `Fall 2022!`})
})

module.exports = router
