const express = require('express');
const router = express.Router();
const personController = require('../controllers/person.controller.js');

router.get('/', personController.findAll);
router.get('/:id', personController.findOne);
router.post('/', personController.create);
router.put('/:id', personController.update);
router.delete('/:id', personController.delete);

module.exports = router;
