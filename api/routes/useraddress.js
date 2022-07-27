const express = require('express');
const router = express.Router();
const controllerAddress = require('../controllers/user-address-controller');

router.get('/', controllerAddress.get_all_addresses);

router.get('/:addressId', controllerAddress.get_by_id_address);

router.post('/register', controllerAddress.register_address);

router.delete('/:userId', controllerAddress.get_by_id_address);


module.exports = router;
