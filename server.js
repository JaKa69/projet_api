const mongoose = require('mongoose');
const app = require('./app');

const port = process.env.PORT || 8080;

mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => {
    console.log('Connexion à la base de données réussie');
    app.listen(port, () => console.log(`Serveur démarré sur le port ${port}`));
  })
  .catch((error) => console.error('Erreur de connexion à la base de données :', error));
