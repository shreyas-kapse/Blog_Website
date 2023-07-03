
const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

router.get('/', (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((blogs) => {
      res.render('index', { title: 'All Blogs', blogs: blogs });
    })
    .catch((error) => res.send(error));
});

router.post('/', (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect('/blogs');
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get('/create', (req, res) => {
  res.render('create', { title: 'Create Blog' });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((blog) => {
      res.render('details', { blog: blog, title: 'Blog Details' });
    })
    .catch((error) => {
      res.send(error);
    });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then(() => {
      res.json({ redirect: '/blogs' });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    });
});

module.exports = router;
