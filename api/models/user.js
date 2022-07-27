const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
  nome: {type: String, required: true},
  sobrenome: {type: String},
  telefone: {type: String},
  email: {type: String},
  status: {type: String},
},
{
    timestamps: true
});

mongoose.model('User', userSchema);
