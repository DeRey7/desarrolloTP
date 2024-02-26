import React from 'react';

const Movimiento = ({ fecha, numeroCuenta, movimientos }) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '15px',
        border: '2px solid purple',
        padding: '20px',
        textAlign: 'center',
        width: '300px',
        fontFamily: 'Arial, sans-serif',
        fontSize: '1.2em',
        fontWeight: 'bold',
        marginBottom: '20px',
      }}
    >
      <div>{fecha}</div>
      <div style={{ marginTop: '10px', marginBottom: '10px' }}>Número de cuenta: {numeroCuenta}</div>
      <div style={{ marginBottom: '10px' }}><strong>Movimientos</strong></div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {movimientos?.map((movimiento, index) => ( // Utiliza el operador de encadenamiento opcional (?.) para verificar si movimientos es undefined
          <li key={index}>{movimiento}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movimiento;