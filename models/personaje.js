const mongoose = require('mongoose');
const {Schema} = mongoose;

const PersonajeSchema=new Schema({
nombre:{type:String,required: true},
foto: { type: String, required: true },
genero:{type:String,required: true},
rol: { type: String, required: true },
origen:{type:String,required: true},
equipo: [{ type: String, required: true }],
poderes: [{ type: String, required: true }],
especie: [{ type: String, required: true }]


})
module.exports = mongoose.model('Personaje', PersonajeSchema);