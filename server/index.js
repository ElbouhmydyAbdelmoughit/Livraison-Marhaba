const express = require('express')
const app = express()
require('dotenv').config();
const cors = require("cors");

// Connection to database
require('./config/db');
require('./models')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

// Routers
const authRoutes = require('./routes/authRoutes')
app.use('/api/auth', authRoutes)
const managerRoutes = require('./routes/managerRoutes')
app.use('/api/user/manager', managerRoutes)
const livreurRoutes = require('./routes/livreurRoutes')
app.use('/api/user/livreur', livreurRoutes)
const clientRoutes = require('./routes/clientRoutes')
app.use('/api/user/client', clientRoutes)

app.all('*', (req, res) => {
  res.send('Page not found');
})

// Port
const port = process.env.PORT || 2001;
app.listen(port, ()=> 
    console.log(`Server running on http://localhost:${port}`)
);

module.exports = app