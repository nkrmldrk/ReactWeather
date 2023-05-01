import React, { useState } from 'react';

import '../App.css';

const InputTag = () => {
  const [inputValue, setInputValue] = useState('empty');
  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <input className='Input' onChange={handleOnChange} value={inputValue}/>
  )
};

const Button = () => (<button className='Button'>Add city</button>)

export const Input = () => {
    <div className="InputWrap">
        <InputTag />
        <Button />
    </div>
};