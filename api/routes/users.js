
const express = require('express');
const router = express.Router();
const controllerUser = require('../controllers/user-controller');


router.get('/', controllerUser.get_all_users);

router.post('/create', controllerUser.create_user);

router.get('/:userId', controllerUser.get_by_id_users);

router.delete('/:userId', controllerUser.delete_by_id_users);
  
  
  module.exports = router;