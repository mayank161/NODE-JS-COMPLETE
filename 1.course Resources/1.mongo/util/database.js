// connecting to the mongodb server
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;
// it is for the connectivity purpose 
const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://mayank:Abcd4321@cluster0.f5vog.mongodb.net/shop?retryWrites=true&w=majority')
    .then(client => {
        _db = client.db();
        callback(); // wait for the call back to return
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
}
// it is for crud operation in data base
const getDb = () => {
    if(_db) {
        return _db;
    }
    throw 'No database found';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;