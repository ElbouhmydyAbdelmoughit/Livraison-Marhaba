const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const managerRoutes = require("./routes/managerRoutes");
const livreurRoutes = require("./routes/livreurRoutes");
const clientRoutes = require("./routes/clientRoutes");
// const commandeRouter = require('./routes/commandRoutes')

// Connection to database
require("./config/db");
require("./models");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

// Routers
app.use("/api/auth", authRoutes);
app.use("/manager", managerRoutes);
app.use("/livreur", livreurRoutes);
app.use("/client", clientRoutes);
// app.use('/add-to-cart', commandeRouter)

app.all("*", (req, res) => {
  res.send("Page not found");
});

// Port
app.listen(process.env.PORT || 2001, () =>
  console.log(`Server running on http://localhost:${process.env.PORT}`)
);

module.exports = app;
