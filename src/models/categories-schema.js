'use strict';

const mongoose = require('mongoose');

const categories = mongoose.Schema({
  name: { type: String, required: true },
  _id: { type: String, required: true },
});

// categories.get();

// categories.post();

// categories.put();

// categories.delete();

module.exports = mongoose.model('categories', categories);
