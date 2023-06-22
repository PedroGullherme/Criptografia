import React, { useState } from 'react';
import './App.css';
import CryptoJS from 'crypto-js';

function Card({ children }) {
  return <div className="card">{children}</div>;
}

function Title({ text }) {
  return <h3>{text}</h3>;
}

function Title2({ text }) {
  return <h4>{text}</h4>;
}

function Text({ text }) {
  return <h2>{text}</h2>;
}

function Input({ value, onChange, onEnterPress }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onEnterPress();
    }
  };

  return <input type="text" className="crip" value={value} onChange={onChange} onKeyPress={handleKeyPress} />;
}

function Button({ onClick, text }) {
  return <button onClick={onClick}>{text}</button>;
}

function Result({ result }) {
  return <p id="Res">{result}</p>;
}

function encryptDES(text, key) {
  const encrypted = CryptoJS.DES.encrypt(text, key);
  return encrypted.toString();
}

function decryptDES(ciphertext, key) {
  const decrypted = CryptoJS.DES.decrypt(ciphertext, key);
  return decrypted.toString(CryptoJS.enc.Utf8);
}

function App() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = () => {
    if (value === '') {
      alert('Precisa ser preenchido');
      return;
    }

    if (!isNaN(parseInt(value))) {
      alert('Só aceita LETRAS');
      return;
    }

    const key = 'chave'; // Defina aqui a sua chave DES de 64 bits

    // Criptografa ou descriptografa o texto com base no resultado atual
    if (result === '') {
      const encryptedText = encryptDES(value, key);
      setResult(encryptedText);
    } else {
      const decryptedText = decryptDES(value, key);
      setResult(decryptedText);
    }
  };

  const handleClearClick = () => {
    setValue('');
    setResult('');
  };

  return (
    <div className="body">
      <Card>
        <Title text="CRIPTOGRAFIA"></Title>
        <Title2 text="Data Encryption Standard (DES)"></Title2>
        <Text text="Digite aqui as palavras:" />
        <Input value={value} onChange={(e) => setValue(e.target.value)} onEnterPress={handleButtonClick} />
        <Button onClick={handleButtonClick} text="Botão" />
        <Button onClick={handleClearClick} text="Limpar" />
        <div id="Result" name="Result">Resultados:</div>
        <Result result={result} />
      </Card>
    </div>
  );
}

export default App;