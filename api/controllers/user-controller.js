const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const passport = require('passport');
const UserModel = mongoose.model('User');

module.exports = {
    get_all_users: async (req, res, next) => {
        try {
          const users = await UserModel.find();
        
          res.status(200).json({
            count: users.length,
            users: users.map(user => {
              return {
                nome: user.nome,
                sobrenome: user.sobrenome,
                telefone: user.telefone,
                email: user.email,
                status: user.status,
              }
            })
          });
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      },
      get_by_id_users: async (req, res, next) => {
        const id = req.params.userId;
   
        try {
          const user = await UserModel.findById({_id: id});
      
          return {
            nome: user.nome,
            sobrenome: user.sobrenome,
            telefone: user.telefone,
            email: user.email,
            status: user.status,
          }
      
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      },
      delete_by_id_users: async (req, res, next) => {
        const id = req.params.userId;
        try {
          let status = await UserModel.deleteOne({_id: id});
      
          res.status(200).json({
              message: 'Delete user',
              status: status
          })
      
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      },
      create_user: async (req, res, next) => {
        try {
      
          let user = new UserModel({});
          user.nome = req.body.username;
          user.sobrenome = req.body.sobrenome;
          user.telefone = req.body.telefone;
          user.email = req.body.email;
          user.status = req.body.status;
          
          user = await user.save();

          res.status(201).json({
            message: 'Created user successfully',
            createdUser: {
                nome: user.nome,
                sobrenome: user.sobrenome,
                telefone: user.telefone,
                email: user.email,
                status: user.status
            }
          })
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      },
}