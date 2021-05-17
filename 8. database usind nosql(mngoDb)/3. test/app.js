const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const mongoose = require('mongoose'); 

const User = require('./models/user');

// const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const user = require('./models/user');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose.connect('mongodb+srv://mayank:Abcd4321@cluster0.f5vog.mongodb.net/shop?retryWrites=true&w=majority')
.then(result => {
  User.findOne() // check have any user
  .then(user => {
    if(!user) { // if no user get from above then only
      const user = new User({
        name: 'Jay',
        email: 'jay12@gmail.com',
        cart: {
          items: []
        }
      });
      user.save();
    }
  });
  app.listen(3000);
})