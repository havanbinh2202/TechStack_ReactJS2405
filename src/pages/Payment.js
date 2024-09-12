import React from 'react';

const Payment = ({ prevStep, handleChange, values }) => {
  return (
    <div>
      <h2>3. PAYMENT</h2>
      <p>Complete your purchase</p>
      <form>
        <label>Card Number *</label>
        <input
          type="text"
          name="cardNumber"
          value={values.cardNumber}
          onChange={handleChange}
          required
        />
        <label>Name on Card *</label>
        <input
          type="text"
          name="cardName"
          value={values.cardName}
          onChange={handleChange}
          required
        />
        <label>Expiration Date *</label>
        <input
          type="month"
          name="expDate"
          value={values.expDate}
          onChange={handleChange}
          required
        />
        <label>CVV *</label>
        <input
          type="text"
          name="cvv"
          value={values.cvv}
          onChange={handleChange}
          required
        />
        <button type="button" onClick={prevStep}>
          Previous Step
        </button>
        <button type="submit">
          Complete Purchase
        </button>
      </form>
    </div>
  );
};

export default Payment;
