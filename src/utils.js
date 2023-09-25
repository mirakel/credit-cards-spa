export const validateMinMaxDigits = (value, min, max) => {
  const valueString = value.toString();

  return valueString.length >= min && valueString.length <= max;
};

export const validateExpirationYear = (value, years) => {
  const currentYear = new Date().getFullYear();
  const expirationYear = parseInt(value, 10);

  return expirationYear >= currentYear && expirationYear <= currentYear + years;
};

export const validateLuhn = (cardNumber) => {
  const cardNumberStr = cardNumber.toString();
  const sanitizedCardNumber = cardNumberStr.replace(/\D/g, "");
  const digits = sanitizedCardNumber.split("").map(Number);

  for (let i = digits.length - 2; i >= 0; i -= 2) {
    digits[i] *= 2;

    if (digits[i] > 9) {
      digits[i] -= 9;
    }
  }

  const sum = digits.reduce((acc, curr) => acc + curr, 0);

  return sum % 10 === 0;
};
