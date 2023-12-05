import { Schema, model } from "mongoose";
import Joi from "joi";
import { preUpdate, saveError } from "./hooks.js";

// монгуз схема - опис того, що ми зберігаємо у файлі
const contactSchema = new Schema( {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  })


const Contact = model("contact", contactSchema)



export const contactAddSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": "missing required name field" }),
  email: Joi.string()
    .required()
    .messages({ "any.required": "missing required email field" }),
  phone: Joi.string()
    .required()
    .messages({ "any.required": "missing required phone field" }),
  favorite: Joi.boolean(),
});

export const updateScheme = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
  favorite: Joi.boolean(),
});


export const movieFavoriteScheme = Joi.object({
  favorite: Joi.boolean().required(),
});


contactSchema.post("save", saveError)
contactSchema.pre("findOneAndUpdate", preUpdate)
contactSchema.post("findOneAndUpdate", saveError)

// хук, який додає статус до запиту

export default Contact;