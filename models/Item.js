const mongoose = require('mongoose')

const Schema = mongoose.Schema

//create schema
const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        date: Date, 
        default: Date
    }
})

module.exports = Item = mongoose.model('item', itemSchema)