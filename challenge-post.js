const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const soups = ['gazpacho', 'borscht', 'primordial', 'avgolemono', 'laksa'];

app.post('/soups', (req, res, next) => {
  const soupName = req.query.name;

  if (soupName) {
    soups.push(soupName);
    res.status(201).send(soupName);
  } else {
    res.status(400).send();
  }

})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

