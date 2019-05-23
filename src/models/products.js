'use strict';

const uuid = require('uuid/v4');

const schema = {
  name: { type: String, required: true },
};

class Products {
  constructor() {
    this.database = [];
  }

  get(_id) {}

  post(entry) {
    entry._id = uuid();
  }

  put(_id, entry) {
    let record = this.sanitize(entry);
    
  }

  delete(_id) {}

  sanitize(entry) {
    let valid = true;
    let record = {};

    Object.keys(schema).forEach((field) => {
      if (schema[field].required) {
        if (entry[field]) {
          record[field] = entry[field];
        } else {
          valid = false;
        }
      } else {
        record[field] = entry[field];
      }
    });

    return valid ? record : undefined;
    
  }
}

module.exports = Products;
