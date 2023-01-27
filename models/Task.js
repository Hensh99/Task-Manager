const mongoose = require('mongoose')

const taskSchema= new mongoose.Schema({
    name:{
        type: String,
        required: [true,'Name is required'],
        trim: true,
        maxlength: [20, 'The max characters for name is 20']     
    },
    completed:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', taskSchema)