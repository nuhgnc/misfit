const express = require('express')

const User = require('../models/User')

const router = express.Router();


router.get('/', async (req,res) => {
    const user = await User.findById(req.session.userID)
    const pageName = req.url
    res.render('./home/index', {user, pageName})
})

router.get('/about', async (req,res) => {
    const pageName = req.url
    const user = await User.findById(req.session.userID)
    res.render('./about/about', {pageName,user})
})

router.get('/trainer', async (req,res) => {
    const pageName = req.url
    const user = await User.findById(req.session.userID)
    const trainers = await User.find({role:'trainer'})
    console.log(trainers)
    res.render('./trainer/trainer',{pageName,user,trainers})
})

router.get('/gallery', async (req,res) => {
    const pageName = req.url
    const user = await User.findById(req.session.userID)
    res.render('./gallery/gallery',{pageName,user})
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

router.get('/dashboard', async (req,res) => {
    const pageName = req.url
    const AllUser = await User.find()
    const user = await User.findById(req.session.userID)
    res.render('dashboard/dashboard', {pageName,user, AllUser})
})

module.exports = router