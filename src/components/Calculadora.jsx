import { useState } from 'react';

const Calculadora = () => {
  const [display, setDisplay] = useState('0');
  const [operacao, setOperacao] = useState(null);
  const [valorAnterior, setValorAnterior] = useState(null);

  const inputNumero = (num) => {
    setDisplay(display === '0' ? num : display + num);
  };

  const inputOperacao = (op) => {
    setOperacao(op);
    setValorAnterior(display);
    setDisplay('0');
  };

  const calcular = () => {
    const atual = parseFloat(display);
    const anterior = parseFloat(valorAnterior);
    
    let resultado;
    switch (operacao) {
      case '+': resultado = anterior + atual; break;
      case '-': resultado = anterior - atual; break;
      case '*': resultado = anterior * atual; break;
      case '/': resultado = anterior / atual; break;
      default: return;
    }
    
    setDisplay(resultado.toString());
    setOperacao(null);
    setValorAnterior(null);
  };

  const limpar = () => {
    setDisplay('0');
    setOperacao(null);
    setValorAnterior(null);
  };

  return (
    <div style={{ maxWidth: '300px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <div style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#f5f5f5', textAlign: 'right', fontSize: '24px' }}>
        {display}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '5px' }}>
        <button onClick={limpar} style={{ gridColumn: 'span 2', padding: '15px' }}>C</button>
        <button onClick={() => inputOperacao('/')} style={{ padding: '15px' }}>÷</button>
        <button onClick={() => inputOperacao('*')} style={{ padding: '15px' }}>×</button>
        
        <button onClick={() => inputNumero('7')} style={{ padding: '15px' }}>7</button>
        <button onClick={() => inputNumero('8')} style={{ padding: '15px' }}>8</button>
        <button onClick={() => inputNumero('9')} style={{ padding: '15px' }}>9</button>
        <button onClick={() => inputOperacao('-')} style={{ padding: '15px' }}>-</button>
        
        <button onClick={() => inputNumero('4')} style={{ padding: '15px' }}>4</button>
        <button onClick={() => inputNumero('5')} style={{ padding: '15px' }}>5</button>
        <button onClick={() => inputNumero('6')} style={{ padding: '15px' }}>6</button>
        <button onClick={() => inputOperacao('+')} style={{ padding: '15px' }}>+</button>
        
        <button onClick={() => inputNumero('1')} style={{ padding: '15px' }}>1</button>
        <button onClick={() => inputNumero('2')} style={{ padding: '15px' }}>2</button>
        <button onClick={() => inputNumero('3')} style={{ padding: '15px' }}>3</button>
        <button onClick={calcular} style={{ gridRow: 'span 2', padding: '15px' }}>=</button>
        
        <button onClick={() => inputNumero('0')} style={{ gridColumn: 'span 2', padding: '15px' }}>0</button>
        <button onClick={() => inputNumero('.')} style={{ padding: '15px' }}>.</button>
      </div>
    </div>
  );
};

export default Calculadora;