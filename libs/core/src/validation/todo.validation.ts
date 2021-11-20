import * as Joi from 'joi';

export const createTodoValidationSchema = Joi.object()
  .keys({
    title: Joi.string().min(1).max(512).required(),
  })
  .required();
