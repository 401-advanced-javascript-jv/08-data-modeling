'use strict';

const schema = require('./categories-schema.js');
const uuid = require('uuid/v4');

class Categories {

  constructor() {
  }

  get(_id) {
    let queryObject = _id ? {_id} : {};
    return schema.find(queryObject);
  }
  
  post(record) {
    record._id = uuid();
    let newRecord = new schema(record);
    return newRecord.save();
  }

  put(_id, record) {
  }

  delete(_id) {
  }

}

module.exports = Categories;
