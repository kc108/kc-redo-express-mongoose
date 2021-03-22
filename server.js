//////////////////////////////////
// Grab environment variables
//////////////////////////////////
require("dotenv").config()

// IMPORT EXPRESS
const express = require("express")

// IMPORT DATABASE CONNECTION
const mongoose = require("./db/connection")

// IMPORT MERCED LOGGER
const { log } = require("mercedlogger")

// IMPORT MIDDLEWARE
const methodOverride = require("method-override")
const morgan = require("morgan")
const cors = require("cors")

// GET PORT FROM ENV OR DEFAULT PORT
const PORT = process.env.PORT || "2021"

// IMPORT Home ROUTER
const HomeRouter = require("./routes/home")

/////////////////////////////////////
//CREATE EXPRESS APPLICATION OBJECT
////////////////////////////////////
const app = express()


/////////////////////////////////////
// SET THE VIEW ENGINE
////////////////////////////////////
app.set("view engine", "ejs")

/////////////////////////////////////
// Setup Middleware
////////////////////////////////////
// Prevent Cors Errors if building an API
app.use(cors())
// Swap method of requests with _method query
app.use(methodOverride("_method"))
// Serve the public folder as static
app.use(express.static("public"))
// Request Logging
app.use(morgan("tiny"))
// Parse json bodies
app.use(express.json())
// Parse bodies from form submissions
app.use(express.urlencoded({ extended: false}))


/////////////////////////////////////
// ROUTES AND ROUTERS
////////////////////////////////////

// Pass ALL ROUTES to the indexRouter
app.use("/", HomeRouter)

/////////////////////////////////////
// App Listener
////////////////////////////////////
app.listen(PORT, () =>
    log.white("🚀 Server Launch 🚀", `Listening on Port ${PORT}`)
)