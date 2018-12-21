const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost', // adresse du serveur
port:8889,
user :  'root', // le nom d'utilisateur
password :  'root25', // le mot de passe
database :  'calendar', // le nom de la base de données
});
module.exports = connection;