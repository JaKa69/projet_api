const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth.routes');
const categoryRoutes = require('./routes/category.routes');
const componentRoutes = require('./routes/component.routes');
const merchantRoutes = require('./routes/merchant.routes');
const priceRoutes = require('./routes/price.routes');
const configurationRoutes = require('./routes/configuration.routes');
const pdfRoutes = require('./routes/pdf.routes');

dotenv.config();

const app = express();
const port = 8080;

app.use(express.json());

mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => {
    console.log('Connexion à la base de données réussie');
  })
  .catch((error) => {
    console.error('Erreur de connexion à la base de données :', error);
  });

// Routes API
app.use('/api/auth', authRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/components', componentRoutes);
app.use('/api/merchants', merchantRoutes);
app.use('/api/prices', priceRoutes);
app.use('/api/configurations', configurationRoutes);
app.use('/api', pdfRoutes);

// Route de test
app.get('/', (req, res) => {
  res.send('API Configurateur PC opérationnelle');
});

// Gestion des routes inexistantes (pro)
app.use((req, res) => {
  res.status(404).json({ message: 'Route introuvable' });
});

// Lancement du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
