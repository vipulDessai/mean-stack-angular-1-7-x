const mongoose = require('mongoose');
const { Schema } = mongoose;

const tasksSchema = new Schema({
    name: String,
    type: String,
    versionKey: false
})

mongoose.model('tasks', tasksSchema)