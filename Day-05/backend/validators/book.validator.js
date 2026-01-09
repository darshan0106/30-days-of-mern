const Joi = require("joi");

const validator = (book) => {
  const bookSchema = Joi.object({
    title: Joi.string().min(5).max(30).required(),
    author: Joi.string().min(5).max(30).required(),
    price: Joi.number().min(1).positive().required(),
    publishedYear: Joi.number()
      .min(1900)
      .max(new Date().getFullYear())
      .optional(),
    description: Joi.string().max(500).optional(),
  });
  return bookSchema.validate(book);
};

module.exports = validator;
