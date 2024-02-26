import React from 'react';
import { Link } from 'react-router-dom';

const Cabecera = ({ onCerrarSesion }) => {
  return (
    <div style={{ width: '100%', backgroundColor: 'purple', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', position: 'fixed', top: 0 }}>
      <div style={{ fontWeight: 'bold', paddingLeft: '20px' }}>Banco Zarpado</div>
      <Link to="/" style={{ textDecoration: 'underline', cursor: 'pointer', paddingRight: '50px' }}>Iniciar Sesión</Link> {/* Cambiar la ruta a "/" */}
    </div>
  );
};

export default Cabecera;
