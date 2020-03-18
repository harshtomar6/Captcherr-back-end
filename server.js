// Dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
const captchaRouter = require('./api/routes/captchaRoute');
const userRouter = require('./api/routes/userRoute');
const path = require('path');
const mongoose = require('mongoose');

// Define PORT
const PORT = process.env.PORT || 3000;

// Load environment variables
dotenv.config();

// Connect to database
mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Use Logger Middleware
app.use(morgan('dev'));

// Use Body parse middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// use ejs rendering engine
app.set('view engine', 'ejs')
app.set('views', path.resolve('./src/views'))

// Set static
app.use(express.static(__dirname+'/src'));

app.get('/', (req, res) => {
  res.render('index.ejs')
});

app.get('/get-started', (req, res) => {
  res.render('get-started.ejs')
})

app.get('/sign-up', (req, res) => {
  res.render('signup.ejs')
})

app.get('/login', (req, res) => {
  res.render('login.ejs')
})

app.get('/profile', (req, res) => {
  res.render('profile.ejs')
})

app.use('/captcha', captchaRouter)
app.use('/user', userRouter)

app.listen(PORT, () => {
  console.log(`Server is LIVE at port: ${PORT}`);
})