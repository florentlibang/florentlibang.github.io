// Main JavaScript file
console.log('Node.js Web App loaded');

fetch('/')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
