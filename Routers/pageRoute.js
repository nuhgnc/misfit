const express = require('express')
const router = express.Router();

const pageControllers = require('../Controllers/pageControllers')

router.route('/').get(pageControllers)