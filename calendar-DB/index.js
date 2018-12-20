const connection = require('./conf');
const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors')
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


// Récupère l'id du calendrier
app.get('/api/calendar/', (req, res) => {

  connection.query('SELECT * FROM calendar', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération de votre id');
    } else {
      res.json(results);
    }
  });
});

app.post('/api/calendar/', (req, res) => {

  const formData = req.body;

  connection.query('INSERT INTO calendar SET ?', formData, (err, results) => {

    if (err) {  //we make sure theres an error (error obj)
      console.log(err);
      res.status(500).send("Erreur lors de la sauvegarde du nouveau calendrier");
    } else {
      res.sendStatus(200);
    }
  });
});

app.get('/api/QA', (req, res) => {

  
  const userId = req.query.id

  connection.query(`SELECT * FROM QA WHERE calendar_id = ${userId -1}`, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération');
    } else {
      res.json(results);
    }
  });
});

// Injecte la question / reponse
app.post('/api/QA/', (req, res) => {
  const formData = req.body;

  connection.query('INSERT INTO QA SET ?', formData, (err, results) => {

    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la sauvegarde de la question");
    } else {
      res.sendStatus(200);
    }
  });
});





app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});