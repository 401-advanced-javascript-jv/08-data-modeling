'use strict';

const uuid = require('uuid/v4');

const schema = {
  _id: { type: String, required: true },
  name: { type: String, required: true },
};

class Products {
  constructor() {
    this.database = [];
  }

  get(_id) {
    let res = _id
      ? this.database.filter((record) => {
        return record._id === _id;
      })
      : this.database;
    return Promise.resolve(res);
  }

  post(entry) {
    entry._id = uuid();
    let record = this.sanitize(entry);
    // Only insert when there's a record... which there will always be because
    // the entry gets sanitized and only correct entries pass...
    // I'm unsure why the example has the following line
    // I commented it out.
    // if (record._id) { this.database.push(record) }
    this.database.push(record);
    return Promise.resolve(record);
  }

  put(_id, entry) {
    let updatedInfo = entry;
    updatedInfo._id = _id;
    let record = this.sanitize(updatedInfo);
    if (record._id) {
      // This goes through the entire database.
      // For every single update.
      // Horrible.
      this.database = this.database.map((item) => {
        return item._id === _id ? record : item;
      });
    }
    return Promise.resolve(record);
  }

  delete(_id) {
    this.database = this.database.filter((record) => {
      return record._id !== _id;
    });
    return Promise.resolve();
  }

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
