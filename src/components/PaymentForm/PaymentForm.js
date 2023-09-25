import axios from "axios";
import { creditCardSchema } from "./creditCardSchema";
import config from "@/config";

export default {
  name: "PaymentForm",
  data() {
    return {
      formData: {
        card_number: "",
        expiration_month: "",
        expiration_year: "",
        cvv: "",
        email: "",
      },
      response: null,
      error: null,
      errors: {},
    };
  },
  methods: {
    async submitForm() {
      try {
        await creditCardSchema.validate(
          {
            cardNumber: this.formData.card_number,
            expirationMonth: this.formData.expiration_month,
            expirationYear: this.formData.expiration_year,
            cvv: this.formData.cvv,
            email: this.formData.email,
          },
          { abortEarly: false }
        );

        axios
          .post(`${config.API_BASE_URL}/tokens`, this.formData, { headers: { token: config.HEADER_AUTHORIZATION_KEY } })
          .then((res) => {
            this.response = res.data;
            this.errors = {};
          })
          .catch((error) => {
            if (error.response && error.response.status === 400) {
              this.error = error.response.data;
              return;
            }

            this.error = error.message;
          });
      } catch (error) {
        this.errors = {};

        error.inner.forEach((err) => {
          this.errors[err.path] = err.message;
        });
      }
    },
  },
};
