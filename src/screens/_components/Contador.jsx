import { useState, useEffect } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  // This special function is called every time the component is rendered
  useEffect(() => {
    setContador(12);
  }, []);

  useEffect(() => {
    if (contador === 15) {
      alert('Llegaste a 15');
    }
  }, [contador]);

  useEffect(() => {
    return () => {
      console.log('Adiós');
    };
  });

  return (
    <div>
      <h2>Contador</h2>
      <button onClick={decrementar}>-</button>
      <h3>{contador}</h3>
      <button onClick={incrementar}>+</button>
    </div>
  );
};

export default Contador;