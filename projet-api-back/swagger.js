const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Configurateur PC API",
      version: "1.0.0",
      description: "API REST pour configurateur de PC"
    },
    servers: [
      {
        url: "http://localhost:3000/api"
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      },
      schemas: {
        User: {
          type: "object",
          properties: {
            firstname: { type: "string" },
            lastname: { type: "string" },
            email: { type: "string" },
            role: { type: "string" }
          }
        },
        Category: {
          type: "object",
          properties: {
            _id: { type: "string" },
            name: { type: "string" },
            description: { type: "string" }
          }
        },
        Component: {
          type: "object",
          properties: {
            title: { type: "string" },
            brand: { type: "string" },
            model: { type: "string" },
            description: { type: "string" },
            category: { type: "string" }
          }
        },
        Merchant: {
          type: "object",
          properties: {
            name: { type: "string" },
            websiteUrl: { type: "string" }
          }
        },
        Price: {
          type: "object",
          properties: {
            component: { type: "string" },
            merchant: { type: "string" },
            price: { type: "number" }
          }
        },
        Configuration: {
          type: "object",
          properties: {
            name: { type: "string" },
            components: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  component: { type: "string" },
                  price: { type: "string" }
                }
              }
            },
            totalPrice: { type: "number" }
          }
        }
      }
    }
  },

  apis: ["./routes/*.js"]
};

module.exports = swaggerJsdoc(options);