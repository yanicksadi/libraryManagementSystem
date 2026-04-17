import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library Management API",
      version: "1.0.0",
      description: "API documentation for Library System",
    },
    servers: [
      {
        url: "http://localhost:5001",
      },
    ],
    components: {
      schemas: {
        Member: {
          type: "object",
          properties: {
            id: { type: "integer" },
            name: { type: "string" },
            email: { type: "string" },
          },
        },
        Author: {
          type: "object",
          properties: {
            id: { type: "integer" },
            name: { type: "string" },
          },
        },
        Book: {
          type: "object",
          properties: {
            id: { type: "integer" },
            title: { type: "string" },
            author_id: { type: "integer" },
          },
        },
        Borrow: {
          type: "object",
          properties: {
            member_id: { type: "integer" },
            book_id: { type: "integer" },
            borrow_date: { type: "string", format: "date" },
            return_date: { type: "string", format: "date" },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"], // 👈 VERY IMPORTANT
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;