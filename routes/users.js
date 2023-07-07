const { register, getAllDoc } = require("../controllers/user");

const router = require("express").Router()

router.post('/register',register)
router.get('/get',getAllDoc)

module.exports = router;