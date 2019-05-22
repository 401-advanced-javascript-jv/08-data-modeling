'use strict';

const Categories = require('../src/models/categories.js');

const supergoose = require('./supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Categories model', () => {
  let testCategory = new Categories();

  it('can post() a new category', () => {
    return testCategory.post({name: 'fish'})
    .then(result => {
      console.log(result);
    })
    .catch((err) => {
      expect(err).toBeUndefined();
    });
  });

  it('can get() all categories', () => {
    let example = [{ name: 'fish', _id: 23 }, { name: 'bob', _id: 28 }];

    return testCategory.get().then((result) => {
      example.forEach((category, idx) => {
        Object.keys(example[idx]).forEach((key) => {
          console.log(result);
        });
      });
    });
  });

  it('can get() a single category by id', () => {
    let example = {};
  });

  it('can put()/update a category to update', () => {});

  it('can delete() a category from the database', () => {});
});
