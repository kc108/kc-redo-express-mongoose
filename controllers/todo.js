/////////////////////////
// import models
/////////////////////////
const Todo = require("../models/Todo");
const List = require("../models/List");

/////////////////////////
// controller functions
/////////////////////////

// Main Todo Page
const index = async (req, res) => {

  // get all the lists with todos
  const lists = await List.find({}).populate("todos");


  // render views/todo/index.ejs with lists
  res.render("todo/index", { lists });
};

// New Todo Page
const newTodo = async (req, res) => {

  // Retrieve List, so user can select which list to add todo to
  const lists = await List.find({})
  // render todo/new.ejs with the lists
  res.render("todo/new", {lists});

};

/////////////////////////
// export controller functions
/////////////////////////

module.exports = {
  index,
  new: newTodo,
};