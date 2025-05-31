const Person = require('../models/person.model');

// GET /person
exports.findAll = async (req, res) => {
  try {
    const people = await Person.find();
    res.json(people);
  } catch (err) {
    res.status(500).send(err);
  }
};

// GET /person/:id
exports.findOne = async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) return res.status(404).send('Person not found');
    res.json(person);
  } catch (err) {
    res.status(500).send(err);
  }
};

// POST /person
exports.create = async (req, res) => {
  try {
    const person = new Person(req.body);
    await person.save();
    res.status(201).json(person);
  } catch (err) {
    res.status(400).send(err);
  }
};

// PUT /person/:id
exports.update = async (req, res) => {
  try {
    const person = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!person) return res.status(404).send('Person not found');
    res.json(person);
  } catch (err) {
    res.status(400).send(err);
  }
};

// DELETE /person/:id
exports.delete = async (req, res) => {
  try {
    const person = await Person.findByIdAndRemove(req.params.id);
    if (!person) return res.status(404).send('Person not found');
    res.json({ message: 'Person deleted' });
  } catch (err) {
    res.status(500).send(err);
  }
};
