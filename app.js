const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const blogRouter = require("./router/blogRouter");
const app = express();
app.set("view engine", "ejs");
app.listen(3000);

app.use(morgan("dev"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const dburl = "mongodb_url";
mongoose
  .connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(3000, "localhost", () => {
      console.log("sever running on 3000");
    });
  })
  .catch((error) => console.log("error" + error));

// app.get('/add-blog',(req,res)=>{
//     const blog=new Blog({
//         title:"Blockchain technoloogy",
//         snippet:"1 about my blog",
//         body:'body of my blog'
//     });
//     blog.save()
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((error)=>{
//         res.send(error);
//     })
// });
// app.get('/all-blogs',(req,res)=>{
//     Blog.find()
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((error)=>{
//         res.send(error);
//     })
// })
// app.get('/single-blog',(req,res)=>{
//     Blog.findById('6478643f9e8c0b4702df752c')
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((error)=>{
//         res.send(error);
//     })
// })
app.get("/", (req, res) => {
  // res.send('<h1>hi</h1>');
  // res.sendFile('./views_html/index.html',{root:__dirname});
  // const blogs=[
  //     {'title':'Laptop story by shreyas kapse',snippet:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
  //     {'title':'Blockchain technological trends',snippet:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
  //     {'title':'Latest technology trends',snippet:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}

  // ]
  // res.render('index',{title:'Home',blogs})
  res.redirect("/blogs");
});

app.get("/about-us", (req, res) => {
  // res.sendFile('./views_html/about_us.html',{root:__dirname});
  res.render("about_us", { title: "About Us" });
});
app.get("/about", (req, res) => {
  //    res.redirect('/about-us');
  res.render("about_us", { title: "About Us" });
});

app.use('/blogs',blogRouter);

app.use((req, res) => {
  // res.sendFile('./views_html/not_found.html',{root:__dirname});
  res.render("not_found", { title: "404" });
});
