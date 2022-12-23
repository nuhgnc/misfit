const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt')

const User = require('../models/User')

router.post('/signup', async (req,res)=> {
    try{
        const {name,email,password,gender} = req.body;
        const user = await User.create({name,email,password,gender})
        console.log(email)
        res.redirect('/login')
    }catch(err){
        res.json(err)
    }
})

router.post('/signin', async (req,res) => {
    const {name,email,password} = req.body;
    const user = await User.findOne({email})
    if (user) {
        bcrypt.compare(password, user.password,  (err, same) => {
          if (same) {
            // USER SESSION
            req.session.userID = user._id;
            console.log(req.session.userID)
            res.status(200).redirect('/')
            console.log('Giriş başarılı')
          }else {
            res.redirect('/login')
            console.log('şifre hatalaı')
        }
        })
    }else{
        res.status(404).redirect('/login')
        console.log('Böyle bir kullanıcı yok')
    }
})




router.get('/logout', (req,res) => {
    req.session.userID = null;
    res.redirect('/')
})

module.exports = router;