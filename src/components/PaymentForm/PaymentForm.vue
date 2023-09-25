<template>
  <div>
    <h4>Ingrese la siguiente información:</h4>

    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="cardNumber">Número de tarjeta de crédito</label>
        <input
          type="text"
          id="cardNumber"
          v-model="formData.card_number"
          placeholder="XXXX XXXX XXXX XXXX"
        />
        <div class="error">{{ errors.card_number }}</div>
      </div>

      <div class="form-group">
        <label for="expirationMonth">Mes de expiración</label>
        <input
          type="text"
          id="expirationMonth"
          v-model="formData.expiration_month"
          placeholder="MM"
        />
        <div class="error">{{ errors.expiration_month }}</div>
      </div>

      <div class="form-group">
        <label for="expirationYear">Año de expiración</label>
        <input
          type="text"
          id="expirationYear"
          v-model="formData.expiration_year"
          placeholder="AAAA"
        />
        <div class="error">{{ errors.expiration_year }}</div>
      </div>

      <div class="form-group">
        <label for="cvv">CVV</label>
        <input type="text" id="cvv" v-model="formData.cvv" placeholder="XXX" />
        <div class="error">{{ errors.cvv }}</div>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" id="email" v-model="formData.email" />
        <div class="error">{{ errors.email }}</div>
      </div>

      <button type="submit">Enviar Pago</button>
    </form>

    <div v-if="response" class="message">
      <p>Respuesta de la API: {{ response }}</p>
    </div>

    <div v-if="error" class="message">
      <p>Error en la solicitud: {{ error }}</p>
    </div>
  </div>
</template>

<script src="./PaymentForm.js"></script>
<style src="./PaymentForm.css" scoped></style>