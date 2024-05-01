import React, { useState } from 'react';

const Convert = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [result, setResult] = useState('');

  const convertToWords = () => {
    const number = parseInt(inputNumber, 10);

    if (isNaN(number) || number < 1 || number > 99) {
      setResult('Please enter a valid number between 1 and 99.');
      return;
    }

    const ones = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teens = ['Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    let words = '';

    if (number >= 1 && number <= 9) {
      words = ones[number];
    } else if (number >= 11 && number <= 19) {
      words = teens[number - 11];
    } else if (number >= 21 && number <= 99) {
      const tensDigit = Math.floor(number / 10);
      const onesDigit = number % 10;
      words = `${tens[tensDigit]} ${ones[onesDigit]}`;
    }

    setResult(words); 
  };

  return (
    <div className='d-flex justify-content-center'>
     <div className='mt-3'>
     <h2>Number to Words Converter</h2>
      <label>
        Enter a number (1-99):
        <input type="text"className='form-control' value={inputNumber} onChange={(e) => setInputNumber(e.target.value)} />
      </label>
      <button className='ms-2 tn btn-primary rounded' onClick={convertToWords}>Convert</button>

      <div className='border border-success mt-4'>
      <p className='text-center p-5'>{result}</p>

      </div>
     </div>
    </div>
  );
};



export default Convert;
