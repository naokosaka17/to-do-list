// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ToDoSchema = new Schema({
  actualTodo: {
    type: String,
    required: true
  },
  completeBy: {
    type: Boolean,
    default:false
  },
  dueDate: {
    type: Date,
    required: true
  }
});

// Create the Article model with the ToDoSchema
var Todo = mongoose.model("todos", ToDoSchema);

// Export the model
module.exports = Todo;
