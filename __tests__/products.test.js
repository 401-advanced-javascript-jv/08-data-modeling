'use strict';

const Products = require('../src/models/products.js');

const supergoose = require('./supergoose.js');

beforeAll(supergoose.startDB());
afterAll(supergoose.stopDB());

describe('Products class', () => {

  it('can get() all products', () => {});

  it('can get() a single product', () => {});

  it('can post() a new product', () => {});

  it('can put()/update a product', () => {});

  it('can delete() a product', () => {});
  
});