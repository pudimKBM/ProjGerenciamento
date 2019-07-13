const mongoose = require('mongoose');

const Catalogador = mongoose.model('catalogador');


module.exports = {
    async create(req, res){
        const catalogador = await Catalogador.create(req.body);
        return res.json(catalogador);
    },
    async addColor(req, res){

        const catalogador = await Catalogador.findByIdAndUpdate(req.params.id, { $push : { cycles : req.body.cycles } });
        res.json(catalogador);
    },
    async getData(req, res){
        const catalogador = await Catalogador.find({user_ID : req.params.id});
        res.json(catalogador);
    }
}