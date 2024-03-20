const db = require("../models");
const { book } = db;

module.exports = {
  getBooks: async (req, res) => {
    try {
      let result = await book.findAll();
      res.status(200).send({
        isError: false,
        message: "Get books success!",
        data: result,
      });
    } catch (error) {
      return res.status(500).send({
        isError: true,
        message: "Error : " + error,
        data: null,
      });
    }
  },

  getBookById: async (req, res) => {
    try {
      const { id } = req.params;

      const result = await book.findOne({
        where: {
          id: Number(id),
        },
      });

      if (!result) {
        return res.status(404).send({
          isError: true,
          message: "Book not found!",
          data: null,
        });
      }

      return res.status(200).send({
        isError: false,
        message: "Get Book By Id success!",
        data: result,
      });
    } catch (error) {
      return res.status(500).send({
        isError: true,
        message: "Error : " + error,
        data: null,
      });
    }
  },

  createBook: async (req, res) => {
    try {
      const { title, author, description, price } = req.body;

      if (!title || !author || !description || !price) {
        return res.status(400).send({
          isError: true,
          message: "Please fill all fields!",
          data: null,
        });
      }

      const result = await book.create({
        title: title,
        author: author,
        description: description,
        price: Number(price),
      });

      return res.status(201).send({
        isError: false,
        message: "Book Created!",
        data: result,
      });
    } catch (error) {
      return res.status(500).send({
        isError: true,
        message: "Error : " + error,
        data: null,
      });
    }
  },

  updateBook: async (req, res) => {
    try {
      const { id } = req.params;

      const { title, author, description, price } = req.body;

      if (!title || !author || !description || !price) {
        return res.status(400).send({
          isError: true,
          message: "Please fill all fields!",
          data: null,
        });
      }

      const isExist = await book.findOne({
        where: {
          id: Number(id),
        },
      });

      if (!isExist) {
        return res.status(404).send({
          isError: true,
          message: "Book not found!",
          data: null,
        });
      }

      let result = await book.update(
        {
          title: title,
          author: author,
          description: description,
          price: Number(price),
        },
        {
          where: {
            id: Number(id),
          },
        }
      );

      return res.status(200).send({
        isError: false,
        message: "Book updated!",
        data: null,
      });
    } catch (error) {
      return res.status(500).send({
        isError: true,
        message: "Error : " + error,
        data: null,
      });
    }
  },

  deleteBook: async (req, res) => {
    try {
      const { id } = req.params;

      const isExist = await book.findOne({
        where: {
          id: Number(id),
        },
      });

      if (!isExist) {
        return res.status(404).send({
          isError: true,
          message: "Book not found!",
          data: null,
        });
      }

      await book.destroy({
        where: {
          id: Number(id),
        },
      });

      return res.status(200).send({
        isError: false,
        message: "Book deleted!",
        data: null,
      });
    } catch (error) {
      return res.status(500).send({
        isError: true,
        message: "Error : " + error,
        data: null,
      });
    }
  },
};
