const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost', // adresse du serveur
port:8889,
user :  'root', // le nom d'utilisateur
<<<<<<< HEAD
password :  'root', // le mot de passe
=======
password :  'Calistaz5', // le mot de passe
>>>>>>> 09e76e1ccbeedca3d58d688623a08b1f6c6e72c6
database :  'calendar', // le nom de la base de données
});
module.exports = connection;