const express = require("express"),
    app = express(),
    cors = require("cors"),
    Blog = require("./models/blog.model"),
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
  console.log("Seeder - Blog OK!");
});
//===========================================================================



var blogs = [
  new Blog({
    title: 'titulo 1',
    image: 'https://github.com/GuillermoEchague/MovieApp/blob/main/img/img1.png',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt a sapiente tempore, maiores eius exercitationem aliquid praesentium obcaecati. Quam, eum! Eius dolore tenetur fuga possimus amet dolor soluta debitis laudantium.',
  }),
  new Blog({
    title: 'titulo 2',
    image: 'https://github.com/GuillermoEchague/MovieApp/blob/main/img/img1.png',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt a sapiente tempore, maiores eius exercitationem aliquid praesentium obcaecati. Quam, eum! Eius dolore tenetur fuga possimus amet dolor soluta debitis laudantium.',
  }),
  new Blog({
    title: 'titulo 3',
    image: 'https://github.com/GuillermoEchague/MovieApp/blob/main/img/img1.png',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt a sapiente tempore, maiores eius exercitationem aliquid praesentium obcaecati. Quam, eum! Eius dolore tenetur fuga possimus amet dolor soluta debitis laudantium.',
  })
];

var done = 0;
for (var i=0; i < blogs.length; i++){
  blogs[i].save( function(err, result){
    done++;
    if(done === blogs.length){
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}