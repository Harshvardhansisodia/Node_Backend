const mongoose = require('mongoose')
const noteSchema = new mongoose.Schema({

    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    date:{
        type: String,
        default: Date.now
    },
    user_id:{
        type: String,
        require: true
    },
    name:{
        type: String,
        require: true
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model('Note', noteSchema)