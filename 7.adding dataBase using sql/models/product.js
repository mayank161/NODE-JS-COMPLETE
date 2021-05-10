const db = require('../util/dataBase');

const Cart = require('./cart');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
  
  // here we have to provide specific fields for (?,?,?,?) as an values in form of array because we are writing in mysql by code
  save() {
    return db.execute('INSERT INTO products (title,price,imageUrl,description) VALUES(?,?,?,?)',
    [this.title,this.price,this.imageUrl,this.description]);
  }

  static deleteById(id) {
     
  }
  
  // it will get all the data
  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }
  
  // it will select specific data
  static findById(id) {
    return db.execute('SELECT * FROM products where products.id = ?', [id]);
  }
};
