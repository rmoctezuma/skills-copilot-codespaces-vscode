// Create web server
const express = require('express');
const app = express();
// Create a port
const PORT = 4001;
// Import comments.js
const comments = require('./comments');
// Create a static server
app.use(express.static('public'));
// Parse incoming JSON data
app.use(express.json());
// Import the comments.js file
const comments = require('./comments');
// Create a route to get all comments
app.get('/comments', (req, res) => {
  res.send(comments);
});
// Create a route to add a comment
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.status(201).send(newComment);
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
