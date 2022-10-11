// Sayfa Dış Gereksinimleri
const express = require('express'),
      ejs = require('ejs')

// Kontrolcü Gereksinimleri
const pageControllers = require('./Controllers/pageControllers')

//Middleares gereksinimleri
const ServerConnectionsMiddlewares = require('./Middlewares/ServerConnectionsMiddlewares')

const app = express();

//MIDDLEWARES
app.set(ServerConnectionsMiddlewares.mongoConnect)

//ROUTERS


//CONTROLLERS
app.use(pageControllers)


// Server Setting
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server ${port} portunda başlatıldı`)
})
