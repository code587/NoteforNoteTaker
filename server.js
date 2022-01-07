const express = require('express');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.use(express.static('public'));

app.get("*", (req, res)=>{
  res.send("404File not found")
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} `)
); 