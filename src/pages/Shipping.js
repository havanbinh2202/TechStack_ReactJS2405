import React from 'react';

const Shipping = ({ nextStep, prevStep, handleChange, values, errors }) => {
  return (
    <div>
      <h2>2. SHIPPING</h2>
      <p>Provide your address</p>
      <form>
        <div>
        <label>Address *</label>
        <input
          type="text"
          name="address"
          value={values.address}
          onChange={handleChange}
          required
        />
        {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}
        </div>
        <div>
        <label>City *</label>
        <input
          type="text"
          name="city"
          value={values.city}
          onChange={handleChange}
          
        />
        {errors.city && <p style={{ color: 'red' }}>{errors.city}</p>}
        </div>
        <div>
        <label>Country *</label>
        <input
          type="text"
          name="country"
          value={values.country}
          onChange={handleChange}
          
        />
        {errors.country && <p style={{ color: 'red' }}>{errors.country}</p>}
        </div>
        <div>
        <label>Zip Code *</label>
        <input
          type="text"
          name="zip"
          value={values.zip}
          onChange={handleChange}
          
        />
        {errors.zip && <p style={{ color: 'red' }}>{errors.zip}</p>}
        </div>
        <button type="button" onClick={prevStep}>
          Previous Step
        </button>
        <button type="button" onClick={nextStep}>
          Proceed to Next Step
        </button>
      </form>
    </div>
  );
};

export default Shipping;
