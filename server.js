const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();
//const {dbConnect} = require('./config/db');
//dbConnect();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));
require('./app/routes')(app, {});
app.listen(port, () => {
  console.log('We are live on ' + port);
});