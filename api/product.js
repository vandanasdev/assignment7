const { UserInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('./db.js');

async function get(_, { id }) {
  const db = getDb();
  const product = await db.collection('products').findOne({ id });
  return product;
}

async function list() {
  const db = getDb();
  const products = await db.collection('products').find({}).toArray();
  return products;
}

// eslint-disable-next-line no-unused-vars
function validate(product) {
  const errors = [];
  if (errors.length > 0) {
    throw new UserInputError('Invalid input(s)', { errors });
  }
}

async function add(_, { product }) {
  const db = getDb();
  // eslint-disable-next-line no-param-reassign
  product.id = await getNextSequence('products');
  const result = await db.collection('products').insertOne(product);
  const savedProduct = await db.collection('products')
    .findOne({ _id: result.insertedId });
  return savedProduct;
}

async function update(_, { id, changes }) {
  const db = getDb();
  if (changes.category || changes.pname || changes.price || changes.imageUrl) {
    const product = await db.collection('products').findOne({ id });
    Object.assign(product, changes);
    validate(product);
  }
  await db.collection('products').updateOne({ id }, { $set: changes });
  const savedProduct = await db.collection('products').findOne({ id });
  return savedProduct;
}

async function remove(_, { id }) {
  const db = getDb();
  const product = await db.collection('products').findOne({ id });
  if (!product) return false;
  product.deleted = new Date();

  let result = await db.collection('deleted_products').insertOne(product);
  if (result.insertedId) {
    result = await db.collection('products').removeOne({ id });
    return result.deletedCount === 1;
  }
  return false;
}

async function totalProduct() {
  const db = getDb();
  const result = await db.collection('products').aggregate([{ $group: { _id: null, count: { $sum: 1 } } }]).toArray();
  return result[0].count;
}

module.exports = {
  list,
  add,
  get,
  update,
  delete: remove,
  totalProduct,
};
