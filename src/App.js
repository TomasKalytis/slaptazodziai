
import './App.css';
import React, { useState } from 'react';

export default () => {
  const [password, setPassword] = useState(""); 
  const [passwordLength, setPasswordLength] = 
    useState(12); 
  const [useSymbols, setUseSymbols] = useState(true); 
  const [useNumbers, setUseNumbers] = useState(true); 

  const generatePassword = () => { 
    let charset = ""; 
    let newPassword = ""; 

    if (useSymbols) charset += "!@#$%^&*()"; 
    if (useNumbers) charset += "0123456789"; 
      
    for (let i = 0; i < passwordLength; i++) { 
      newPassword += charset.charAt( 
        Math.floor(Math.random() * charset.length) 
      ); 
    } 
    setPassword(newPassword);
     
  }; 

  

  return(
    <div className='container'>
      <h1>Kodų generatorius</h1>
    <div className='generatedPassword'> 
      <label 
        className='labelStyle'> 
          Generated Password: 
      </label> 
      <input 
        className='inputStyle'
        type="text"
        readOnly
        value={password}
      /> 
                    
      </div> 
      <div className='inputContainer'>
        <label className='labelStyle'>
          Kodo ilgis:
        </label>
        <input 
          type="number" 
          min="5" max="20" 
          value={passwordLength} 
          onChange={(e) => setPasswordLength(e.target.value)}/>
      
        <label>
          <input 
            type='checkbox'
            checked={useNumbers}
            onChange={() =>
              setUseNumbers(!useNumbers)}/>
            Numbers
        </label>
        <label>
          <input 
            type='checkbox'
            checked={useSymbols}
            onChange={() => setUseSymbols(!useSymbols)}/>
              Symbols
        </label>
      </div>
      <button 
        className='buttonStyle'
        onClick={generatePassword} >
        Generate Password
      </button>
    </div>
  );
  
};


