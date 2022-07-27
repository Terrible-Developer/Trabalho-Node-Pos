const mongoose = require('mongoose');

let userAddressSchema = new mongoose.Schema({
  _id: Object,
  pessoa_id: {type: String},
  cep: {type: String, required: true},
  logradouro: {type: String, lowercase: true},
  numero: {type: Number},
  complemento: {type: String},
  bairro: {type: String},
  cidade: {type: String},
  uf: {type: String}
},
{
    timestamps: true
});

mongoose.model('UserAddress', userAddressSchema);
