import React, { useState, useEffect } from 'react';
import Cabecera from './Cabecera';
import PieDePagina from './PieDePagina';

// Importa las imágenes utilizando rutas relativas
import img1 from './img1.jpeg';
import img2 from './img2.jpeg';
import img3 from './img3.jpeg';

const VentanaInicioSesion = ({ onIniciarSesion }) => {
  const [imagenIndex, setImagenIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImagenIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const imagenes = [img1, img2, img3]; // Utiliza las variables de imagen importadas

  const handleIniciarSesionClick = () => {
    onIniciarSesion();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Cabecera onCerrarSesion={handleIniciarSesionClick} />
      <img src={imagenes[imagenIndex]} alt="imagen" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      <PieDePagina valorDolar={100} clima="Soleado" datoAdicional="Sin demoras en las calles" />
    </div>
  );
};

export default VentanaInicioSesion;