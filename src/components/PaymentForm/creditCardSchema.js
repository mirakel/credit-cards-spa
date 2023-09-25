import {
  validateExpirationYear,
  validateLuhn,
  validateMinMaxDigits,
} from "@/utils";
import * as Yup from "yup";

const ALLOW_DOMAIN_EMAIL = ["gmail.com", "hotmail.com", "yahoo.es"];
const REGEX_DOMAIN_EMAIL =
  /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.es|hotmail\.com)$/;

export const creditCardSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .required("Card number is required")
    .matches(/^\d+$/, "Card number must be a string of digits")
    .test(
      "card-number",
      "The card number must be between 13 and 16 digits and be valid according to Luhn",
      (value) => {
        if (!value) return false;
        const isValidLength = validateMinMaxDigits(Number(value), 13, 16);
        const isValidLuhn = validateLuhn(Number(value));
        return isValidLength && isValidLuhn;
      }
    ),
  cvv: Yup.string()
    .required("cvv is required")
    .min(3, "cvv must be at least 3 digits")
    .max(4, "cvv must have a maximum of 4 digits")
    .matches(/^\d+$/, "cvv must be a string of digits"),
  expirationMonth: Yup.string()
    .required("Expiration month is required")
    .matches(/^(0?[1-9]|1[0-2])$/, "Enter a valid expiration month (1-12)"),
  expirationYear: Yup.string()
    .required("Expiration year is required")
    .matches(/^(20\d{2}|2\d{3})$/, "Enter a valid expiration year (AAAA)")
    .test(
      "expiration",
      "The expiration year must not be more than 5 years",
      (value) => {
        if (!value) return false;
        return validateExpirationYear(value, 5);
      }
    ),
  email: Yup.string()
    .required("Email is required")
    .min(5)
    .max(100)
    .matches(
      REGEX_DOMAIN_EMAIL,
      `Email only allows domains: ${ALLOW_DOMAIN_EMAIL}`
    ),
});
