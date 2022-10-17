const express = require('express')

const User = require('../models/User')

const router = express.Router();


router.get('/', async (req,res) => {
    const user = await User.findById(req.session.userID)
    const pageName = req.url
    res.render('./home/index', {user, pageName})
})

router.get('/about', (req,res) => {
    const pageName = req.url
    res.render('./about/about', {pageName})
})

router.get('/trainer', (req,res) => {
    const pageName = req.url
    res.render('./trainer/trainer',{pageName})
})

router.get('/gallery', (req,res) => {
    const pageName = req.url
    res.render('./gallery/gallery',{pageName})
})

router.get('/contact', (req,res) => {
    const pageName = req.url
    res.render('./contact/contact',{pageName})
})

router.get('/signin', (req,res) => {
    res.render('./login/signin')
})

router.get('/signup', (req,res) => {
    res.render('./login/signup')
})

router.get('/login', (req,res) => {
    res.render('./login/login')
})

module.exports = router