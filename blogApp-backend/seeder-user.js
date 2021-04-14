
const express = require("express"),
    app = express(),
    cors = require("cors"),
    User = require("./models/user.model"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    LocalStratergy = require("passport-local"),
    blogsRouter = require("./routes/blogs.router"),
    userRouter = require("./routes/user.router"),
    bodyParser = require("body-parser");
require("dotenv").config();
var session = require("express-session");
var MemoryStore = require("memorystore")(session);


//===========================================================================
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.connection.once("open", () => {
  console.log("Seeder - User OK!");
});
//===========================================================================



var users = [
  new User({
    username: 'user1',
    email: 'user1@test1.com',
  }),
  new User({
    username: 'user2',
    email: 'user1@test2.com',
  }),
  new User({
    username: 'user3',
    email: 'user1@test3.com',
  })
];



var done = 0;
for (var i=0; i < users.length; i++){
  users[i].save( function(err, result){
    done++;
    if(done === users.length){
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}