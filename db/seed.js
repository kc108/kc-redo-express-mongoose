//Import The Database Connection
const mongoose = require("./connection")

///////////////////////////////////////////
// IMPORT YOUR MODELS BELOW
///////////////////////////////////////////
const Todo = require("../models/Todo")
const List = require("../models/List")

///////////////////////////////////////////
// DO YOUR DATABASE OPERATIONS IN BELOW FUNCTION
///////////////////////////////////////////

const seed = async () => {

    //*********Code Goes Here

    // OPTION, lines to wipe out collections before adding data
    await List.deleteMany({}) // removes all of the exists lists
    await Todo.deleteMany({}) // delete all existing todos

    // add some lists
    const lists = await List.create([{name: "Work"}, {name: "Personal"}, {name: "Goals"}])

    //console.log the created lists
    console.log(lists)

    // create some todos, add them to the lists we just created
    const todos = await Todo.create([
        // add todo to work list
        {subject: "Board Meeting", list: lists[0]._id},
        // add todo to personal list
        {subject: "Clean House", list: lists[1]._id},
        // add todo to goals list
        {subject: "Guitar Practice", list: lists[2]._id},
    ])

    // console.log the created todos
    console.log(todos)

    // update each list with the todo

    await lists[0].todos.push(todos[0]._id)
    lists[0].save()

    await lists[1].todos.push(todos[1]._id)
    lists[1].save()

    await lists[2].todos.push(todos[2]._id)
    lists[2].save()

    // log updated lists
    console.log(lists)


    //***************************** */


}

// Run Seed Function
seed()