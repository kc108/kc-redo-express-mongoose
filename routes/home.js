// create our new router
const router = require("express").Router()

// Import the todo route
const TodoRouter = require("./todo")

//////////////////////////////////
// Router Specific Middleware
//////////////////////////////////
router.use("/todos", TodoRouter)

//////////////////////////////////
// Router Specific Routes
//////////////////////////////////

// Our Main Page
router.get("/", (req, res) => {
    res.render("home")
});

//////////////////////////////////
// Export the Router
//////////////////////////////////
module.exports = router;

