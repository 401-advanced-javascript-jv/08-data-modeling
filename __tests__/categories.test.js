'use strict';

const Categories = require('../src/models/categories.js');

const supergoose = require('./supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Categories model', () => {
  let testCategory = new Categories();
  let testData = {};

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

  //adds a second item to the database
  testCategory.post({name:'bob'});
  testCategory.post({name:'calvin'});

  it('can get() all categories', () => {
    let testNames = ['fish','bob','calvin'];
    let checkArray = [];

    return testCategory
      .get()
      .then((results) => {
        results.forEach((item) => {
          expect(testNames.includes(item.name)).toBeTruthy();
          expect(checkArray.includes(item.name)).toBeFalsy();
          // This array checks for uniqueness of the test data that was
          // posted to the database. Unique things went in, so when they come 
          // out, they get saved to checkArray.
          // The database should not be returning duplicates.
          checkArray.push(item.name);
          testData[item.name] = item.id;
        });
      })
      .catch((err) => {
        console.log(err);
        expect(err).toBeUndefined();
      });
  });

  it('can get() a single category by id', () => {
    for (let itemName in testData) {
      return testCategory.get(testData[itemName]).then((result) => {
        expect(result[0].name).toEqual(itemName);
      }).catch((err) => {
        expect(err).toBeUndefined();
      });
    }
  });

  it('can put()/update a category to update', () => {});

  it('can delete() a category from the database', () => {});
});
