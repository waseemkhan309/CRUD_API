const express = require('express');
const router = express.Router();
const { getmet, postmet, putmet, deletemet } = require('../controller/Controller');

router.get('/user', getmet);
router.post('/user', postmet);
router.put('/user/:id', putmet);
router.delete('/user/:id', deletemet);

module.exports = router;
