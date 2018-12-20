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
    console.log(err, ": :", results)
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

// Injecte la question / reponse
<<<<<<< HEAD
app.post('/api/QA/', (req, res) => {
  const formData = req.body;

  connection.query('INSERT INTO QA SET ?', formData, (err, results) => {

    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la sauvegarde de la question");
    } else {
      res.sendStatus(200);
    }
=======
app.post('/api/question_answer/', (req, res) => {

    const formData = req.body;
  
    connection.query('INSERT INTO QA SET ?', formData, (err, results) => {

      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la sauvegarde de la question");
      } else {
        results.sendStatus(200);
      }
    });
>>>>>>> 09e76e1ccbeedca3d58d688623a08b1f6c6e72c6
  });
});





app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});