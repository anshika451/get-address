const express = require('express');
const addressController = require('../controllers/addressController');

const router = express.Router();

router.route('/getAddress').post(addressController.getAddressDetails);

module.exports = router;
