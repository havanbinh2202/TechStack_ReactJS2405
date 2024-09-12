import React, { useState } from 'react';
import Information from './Information';
import Shipping from './Shipping';
import Payment from './Payment';

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    zip: '',
    cardNumber: '',
    cardName: '',
    expDate: '',
    cvv: ''
  });
  const [errors, setErrors] = useState({});

  // Kiểm tra form validation
  const validate = () => {
    let validationErrors = {};

    // Validate step 1 (Information)
    if (step === 1) {
      if (!formData.email) {
        validationErrors.email = "Email is required";
      }
      if (!formData.firstName) {
        validationErrors.firstName = "First name is required";
      }
      if (!formData.lastName) {
        validationErrors.lastName = "Last name is required";
      }
    }

    // Validate step 2 (Shipping)
    if (step === 2) {
      if (!formData.address) {
        validationErrors.address = "Address is required";
      }
      if (!formData.city) {
        validationErrors.city = "City is required";
      }
      if (!formData.country) {
        validationErrors.country = "Country is required";
      }
      if (!formData.zip) {
        validationErrors.zip = "Zip code is required";
      }
    }

    // Validate step 3 (Payment)
    if (step === 3) {
      if (!formData.cardNumber) {
        validationErrors.cardNumber = "Card number is required";
      }
      if (!formData.cardName) {
        validationErrors.cardName = "Name on card is required";
      }
      if (!formData.expDate) {
        validationErrors.expDate = "Expiration date is required";
      }
      if (!formData.cvv) {
        validationErrors.cvv = "CVV is required";
      }
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  // Chuyển sang bước tiếp theo sau khi kiểm tra validation
  const nextStep = () => {
    if (validate()) {
      setStep(step + 1);
    }
  };

  // Quay lại bước trước
  const prevStep = () => {
    setStep(step - 1);
  };

  // Xử lý thay đổi dữ liệu
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Hiển thị bước hiện tại
  switch (step) {
    case 1:
      return (
        <Information
          nextStep={nextStep}
          handleChange={handleChange}
          values={formData}
          errors={errors}
        />
      );
    case 2:
      return (
        <Shipping
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={formData}
          errors={errors}
        />
      );
    case 3:
      return (
        <Payment
          prevStep={prevStep}
          handleChange={handleChange}
          values={formData}
          errors={errors}
        />
      );
    default:
      return <div>Error</div>;
  }
};

export default Checkout;
