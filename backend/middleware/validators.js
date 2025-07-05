// middlewares/validators.js
import { body } from "express-validator";

export const registerValidation = [
  body("fullName")
    .trim()
    .notEmpty().withMessage("Full name is required.")
    .isLength({ min: 2 }).withMessage("Full name must be at least 2 characters."),

  body("email")
    .trim()
    .notEmpty().withMessage("Email is required.")
    .isEmail().withMessage("Invalid email format.")
    .normalizeEmail(),

  body("password")
    .notEmpty().withMessage("Password is required.")
    .isLength({ min: 6 }).withMessage("Password must be at least 6 characters."),

  body("phone")
    .optional()
    .trim()
    .isMobilePhone().withMessage("Invalid phone number.")
];

export const loginValidation = [
  body("email")
    .trim()
    .notEmpty().withMessage("Email is required.")
    .isEmail().withMessage("Invalid email format.")
    .normalizeEmail(),

  body("password")
    .notEmpty().withMessage("Password is required.")
];
