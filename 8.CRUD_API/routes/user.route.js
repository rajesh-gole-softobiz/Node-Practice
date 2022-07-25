const express = require('express');
const { getAllUsers } = require('../controllers/user.controller');
const router = express.Router();

router.get('/',getAllUsers);
router.get('/:id',getAllUsers);
router.post('/',getAllUsers);

module.exports = router;