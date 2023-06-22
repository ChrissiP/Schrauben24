const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Importiere - Schrauben Model
const schraubenModel = require('./schraubenModel');

mongoose.connect('mongodb+srv://christinapsiloudi:passw@cluster0.ymou45g.mongodb.net/Schrauben24?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('MongoDB connected...');
})
.catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Verkauf einer bestimmten Schrauben-Typ
app.get('/sales/:schrauben_typ', (req, res) => {
  const schraubenTyp = req.params.schrauben_typ;
  schraubenModel.find({'schrauben_typ': schraubenTyp}).exec()
    .then((schrauben) => {
      res.send(schrauben);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({ error: 'Ups, ein Fehler!' });
    });
});

// alle Schrauben
app.get('/sales', (req, res) => {
  schraubenModel.find({}).exec()
    .then((schrauben) => {
      res.send(schrauben);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({ error: 'Ups, ein Fehler!' });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
