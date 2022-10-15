const express = require('express');
const router = express.Router();

const student = require('../controller/student')


router.get('/',student.student)

module.exports = router;