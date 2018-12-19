import React, { Component } from 'react';
const connection = require('./conf');



app.get('/calendar/id', (req, res) => {

    // connection à la base de données, et sélection des employés
    connection.query('SELECT * from calendar', (err, results) => {
  
      if (err) {
  
        res.status(500).send('Erreur lors de la récupération des infos');
      } else {
  
        res.json(results);
      }
    });
  });




class Link extends Component {



    render(){
        return(
            <div>
                    <p>
                        Congratulation ! Your calendar has been successfully created !
                        Your link : http://localhost:3000/calendar/id
                    </p>
            </div>
        )
    }
}

export default Link;






