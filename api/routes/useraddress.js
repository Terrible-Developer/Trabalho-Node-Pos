const express = require('express');
const router = express.Router();
const controllerAddress = require('../controllers/user-address-controller');

router.get('/', controllerAddress.get_all_addresses);

router.get('/:addressId', controllerAddress.get_by_id_addresses);

router.post('/register', controllerAddress.register_address);

router.delete('/:userId', controllerAddress.delete_by_id_addresses);


module.exports = router;
