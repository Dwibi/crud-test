const express = require("express");
const PORT = 5000;
const app = express();

app.use(express.json());

const { booksRouter } = require("./routers");

app.use("/books", booksRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
