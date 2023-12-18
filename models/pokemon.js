const mongoose = require('mongoose');

const pokemonsSchema = new mongoose.Schema({
    name:{type: String, required: true},
    img:{ type: String, required: true},
  
});

const Pokemon = mongoose.model('Pokemon', pokemonsSchema);

module.exports = Pokemon;
