// Sayfa Dış Gereksinimleri
const express = require('express'),
      session = require('express-session'),
      MongoStore = require('connect-mongo')
      ejs = require('ejs')

// Kontrolcü Gereksinimleri
const pageControllers = require('./Controllers/pageControllers')
const authControllers = require ('./Controllers/authControllers')

//Middleares gereksinimleri
const ServerConnectionsMiddlewares = require('./Middlewares/ServerConnectionsMiddlewares')

const app = express();

//DATABASE CONNECT
app.set(ServerConnectionsMiddlewares.mongoConnect)

//MIDDLEWARES
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: true,
      store: MongoStore.create({ mongoUrl: 'mongodb+srv://admin:Ac123321.@cluster0.rvtg8fq.mongodb.net/misfitSessions?retryWrites=true&w=majority' }),
    })
  );
  app.use('*', (req, res, next) => {
    global.currentUser = req.session.userID;
    next();
  });
  
  //CONTROLLERS
  app.use(pageControllers)
  app.use(authControllers)
  
  
  // Server Setting
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server ${port} portunda başlatıldı`)
})
