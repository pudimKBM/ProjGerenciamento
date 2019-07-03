const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const orderScheema = new mongoose.Schema({
    time: {
        type: Date,
        default: Date.now,
        required: false
    },
    call: {
        type: String,
        required: true
    },
    pair:{
        type: String,
        required: true
    },
    ammount:{
        type: Number,
        required: true
    },
    cicle: {
        type: String,
        required: true
    },
    payout: {
        type: Number,
        required: true
    },
    martigale: {
        type: Boolean,
        required: false,
    },
    quantity: {
        type: Number,
        required: true
    }


});

orderScheema.plugin(mongoosePaginate);

mongoose.model('orders', orderScheema);