const express = require('express');

const router = express.Router();

const student = require('./student');
const mentor = require('./mentor')

router.use('/student',student);

module.exports = router;

