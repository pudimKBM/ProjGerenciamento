const mongoose = require('mongoose/');


const catalogadorSchema = new mongoose.Schema({
    user_ID: {
        type: String,
        required : true
    },
    pair:{
        type :String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: false
    },
    cycles:{
        type :Array,
    }
})

mongoose.model('catalogador', catalogadorSchema);