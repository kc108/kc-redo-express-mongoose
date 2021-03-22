// Create our New Router
const router = require("express").Router()
const TodoController = require("../controllers/todo.js")
console.log(TodoController)
//////////////////////////////////
// Router Specific Middleware
//////////////////////////////////

//////////////////////////////////
// Router Specific Routes
//////////////////////////////////
router.get("/", TodoController.index)

// new todo page
router.get("/new", TodoController.new)

//////////////////////////////////
// Export the Router
//////////////////////////////////
module.exports = router;