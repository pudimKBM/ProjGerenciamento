const mongoose = require('mongoose');

const User = mongoose.model('user');

module.exports = {
    async create (req, res){
        const user = await User.create(req.body);
        return res.json(user);
    }
}