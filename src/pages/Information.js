import React from 'react';
import 'react-phone-input-2/lib/style.css'; // Import CSS của thư viện
import PhoneInput from 'react-phone-input-2';

const Information = ({ nextStep, handleChange, values, errors }) => {
  return (
    <div>
      <h2>Customer Information</h2>
      <form>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
        </div>
        <div>
          <label>Phone Number:</label>
          <PhoneInput
            country={'us'} // Quốc gia mặc định
            enableAreaCodes={true} // Hiển thị đầu số vùng
            value={values.phone}
            onChange={(phone) => handleChange({ target: { name: 'phone', value: phone } })}
            autoFormat={true} // Định dạng số điện thoại tự động
          />
          {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
        </div>
        <button type="button" onClick={nextStep}>Next</button>
      </form>
    </div>
  );
};

export default Information;
