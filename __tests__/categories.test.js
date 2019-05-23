'use strict';

const Categories = require('../src/models/categories.js');

const supergoose = require('./supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Categories model', () => {
  let testCategory = new Categories();

  it('can post() a new category', () => {
    let name = 'fish';
    return testCategory
      .post({name})
      .then((result) => {
        expect(result.name).toEqual(name);
      })
      .catch((err) => {
        expect(err).toBeUndefined();
      });
  });

  it('can get() all categories', () => {
  });

  it('can get() a single category by id', () => {
  });

  it('can put()/update a category to update', () => {});

  it('can delete() a category from the database', () => {});
});
