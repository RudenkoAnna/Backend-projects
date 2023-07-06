const express = require("express");
const bodyParser = require("body-parser");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const accountRouter = require("./routers/accounts");
const tokenRouter = require("./routers/tokens");

const app = express();
app.use(bodyParser.json());

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Account API",
      version: "1.0.0",
    },
  },
  apis: ["./routers/accounts.js", "./routers/tokens.js"],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Connect routers
app.use("/accounts", accountRouter);
app.use("/tokens", tokenRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
