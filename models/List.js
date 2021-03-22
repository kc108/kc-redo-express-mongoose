// Destructure Schema and model from our connected mongoose
const { Schema, model } = require("../db/connection")

///////////////////////////////////
// DEFINE OUR SCHEMA
///////////////////////////////////

const ListSchema = new Schema({
  name: { type: String, required: true },
  todos: [{ type: Schema.Types.ObjectId, ref: "Todo" }],
})

///////////////////////////////////
// DEFINE OUR MODEL
///////////////////////////////////

const List = model("List", ListSchema)

///////////////////////////////////
// Export Our Model
///////////////////////////////////

module.exports = List