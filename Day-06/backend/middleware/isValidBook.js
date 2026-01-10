const Joi = require("joi");

const isValidBook = async (req, res, next) => {
  const bookSchema = Joi.object({
    title: Joi.string().min(5).max(30).required(),
    author: Joi.string().min(5).max(30).required(),
    publishedYear: Joi.number()
      .min(1900)
      .max(new Date().getFullYear())
      .required(),
    genre: Joi.string().required(),
    price: Joi.number().min(1).positive().required(),
  });
  const { error } = bookSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

module.exports = isValidBook;
