const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const path = require('path');

const authRoutes = require('./routes/auth.routes');
const categoryRoutes = require('./routes/category.routes');
const componentRoutes = require('./routes/component.routes');
const merchantRoutes = require('./routes/merchant.routes');
const priceRoutes = require('./routes/price.routes');
const configurationRoutes = require('./routes/configuration.routes');
const pdfRoutes = require('./routes/pdf.routes');

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes API
app.use('/api/auth', authRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/components', componentRoutes);
app.use('/api/merchants', merchantRoutes);
app.use('/api/prices', priceRoutes);
app.use('/api/configurations', configurationRoutes);
app.use('/api', pdfRoutes);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'API ConfigurateurPC - Documentation'
}));

// Routes tests et front
app.get('/', (req, res) => res.send('API Configurateur PC opérationnelle'));
app.get('', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

// Gestion erreurs
app.use((req, res) => res.status(404).json({ message: 'Route introuvable' }));
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Erreur interne serveur" });
});

module.exports = app;
