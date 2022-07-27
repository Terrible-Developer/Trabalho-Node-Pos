const mongoose = require('mongoose');
const AddressModel = mongoose.model('UserAddress');
const UserModel = mongoose.model('User');

module.exports = {
    get_all_addresses: async (req, res, next) => {
          const addresses = await AddressModel.find({address: req.addressId}).select(
              "pessoa_id cep logradouro numero complemento bairro cidade uf");

          res.status(200).json({
            count: addresses.length,
            addresses: addresses.map(address => {
              return {
                pessoa_id: address.pessoa_id,
                cep: address.cep,
                logradouro: address.logradouro,
                numero: address.numero,
                complemento: address.complemento,
                bairro: address.bairro,
                cidade: address.cidade,
                uf: address.uf
              }
            })
          });
    },

    get_by_id_addresses:async (req, res, next) => {
        const id = req.params.addressId;
        try {
            let status = await AddressModel.findById({_id: id});

            res.status(200).json({
                message: 'Return user',
                status: status
            });
        } catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    },

      delete_by_id_addresses: async (req, res, next) => {
        const id = req.params.addressId;
        try {
          let status = await AddressModel.deleteOne({_id: id});

          res.status(200).json({
              message: 'Delete user',
              status: status
          });

        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      },
      register_address: async (req, res, next) => {
        try {

          const pessoaExiste = await UserModel.findById({_id: req.body.pessoa_id});

          if (!pessoaExiste) {
            res.status(404).json({
              status: 404,
              message: 'There is no user with this ID',
            });
          }

          let address = new AddressModel({});
          address.pessoa_id = req.body.pessoa_id;
          address.cep = req.body.cep;
          address.logradouro = req.body.logradouro;
          address.numero = req.body.numero;
          address.bairro = req.body.bairro;
          address.cidade = req.body.cidade;
          address.uf = req.body.uf;
          

          address = await address.save();

          res.status(201).json({
            message: 'Created address successfully',
            createdAddress: {
                pessoa_id: address.pessoa_id,
                cep: address.cep,
                logradouro: address.logradouro,
                numero: address.numero,
                complemento: address.complemento,
                cidade: address.cidade,
                uf: address.uf,
            }
          });
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      },
}
