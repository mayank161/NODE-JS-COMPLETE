const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/dataBase'); // it will get the exports in database.js

const product = require('./models/product');
const user = require('./models/user');
const cart = require('./models/cart');
const cartItem = require('./models/cart-item');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next)=> {
    user.findByPk(1) // we always het user in middleware because we created user down at the time of sync
    .then(User => {
        req.user = User;
        next();
    })
    .catch(err => console.log(err));
})

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
// it will set the relation for user with product as a foreign key as user id so when user deleted then product will be delete
product.belongsTo(user, {constraints: true, onDelete: 'CASCADE'})
user.hasMany(product);

// this will create user id as foreign key in cart table
user.hasOne(cart);
cart.belongsTo(user);
// here many to many relation so we have to store both the id specifically using through in table
cart.belongsToMany(product, { through: cartItem});
product.belongsToMany(cart, { through: cartItem});

//sequelize.sync({ force: true })
sequelize.sync()
.then(() => {
    return user.findByPk(1) // check wether their is any user because first user have 1 id
})
.then(User => {
    if(!User) {
        return user.create({ name:'jay', Email:'jay12@gamil.com'})
    }
    return User
})
.then((User) => {
    // it will create cart with reference of UserId as foreign key
    return User.createCart() 
})
.then(() => {
    app.listen(3000);
})
.catch(err => console.log(err))
