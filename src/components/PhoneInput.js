import React, { useState } from 'react';

const PhoneInput = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    const regex = /\d+/g;
    const digitsMatch = value.match(regex);
    let formatted = '';

    if (digitsMatch) {
      let digits = digitsMatch.join('');

      formatted = `(${digits.substr(0, 3)}`;
      if (digits.length > 3) {
        formatted += `) ${digits.substr(3, 3)}`;

        if (digits.length > 6) {
          formatted += `-${digits.substr(6, 4)}`;
        }
      }
    }

    setText(formatted);
  };

  return <input type="text" value={text} onChange={handleChange} />;
};

export default PhoneInput;
