const mongoose = require('mongoose');

const Orders = mongoose.model('orders');

module.exports={
    async index(req, res){
        const {page = 1} = req.query;
        const orders = await Orders.paginate({},{page, limit:10});
        return res.json(orders);
    },

    async search(req, res){
        const orders = await Orders.findById(req.params.id);
        return res.json(orders);
    },

    async store(req, res){
        const orders = await Orders.create(req.body);

        return res.json(orders);
    },

    async update(req, res){
        const orders = await Orders.findByIdAndUpdate(req.params.id, req.body, { new : true});

        return res.json(orders);
    },

    async delete(req , res){
         await Orders.findByIdAndRemove(req.params.id);

        return res.send("deletado");
    }
};
