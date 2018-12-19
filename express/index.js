const connection = require('./conf');
const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));



// Récupère l'id du calendrier
app.get('/calendar/id', (req, res) => {

    connection.query('SELECT id from calendar', (err, results) => {
  
      if (err) {
  
        res.status(500).send('Erreur lors de la récupération de votre id');
      } else {
  
        res.json(results);
      }
    });
  });



// Injecte la question / reponse
app.post('/QA', (req, res) => {

    const formData = req.body;
  
    connection.query('INSERT INTO calendar SET ?', formData, (err, results) => {

      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la sauvegarde de la question");
      } else {
        res.sendStatus(200);
      }
    });
  });





  app.listen(port, (err) => {
    if (err){
    throw new Error('Something bad happened...');
    }
    
    console.log(`Server is listening on ${port}`);
    });