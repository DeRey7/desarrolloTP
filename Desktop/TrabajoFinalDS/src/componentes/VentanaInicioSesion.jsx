import React, { useState, useEffect } from 'react';
import Cabecera from './Cabecera';
import PieDePagina from './PieDePagina';


const VentanaInicioSesion = ({ onIniciarSesion }) => {
  const [imagenIndex, setImagenIndex] = useState(0); // Estado para el índice de la imagen actual

  useEffect(() => {
    // Función para cambiar la imagen cada 10 segundos
    const interval = setInterval(() => {
      setImagenIndex((prevIndex) => (prevIndex + 1) % 3); // Cambia al siguiente índice de imagen
    }, 10000); // 10000 milisegundos = 10 segundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, []); // El efecto solo se ejecuta una vez al montar el componente

  const imagenes = ['img1.jpeg', 'img2.jpeg', 'img3.jpeg']; // Nombres de las imágenes

  const handleIniciarSesionClick = () => {
    onIniciarSesion(); // Llama a la función para iniciar sesión
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Cabecera onCerrarSesion={handleIniciarSesionClick} />
      {/* Renderiza la imagen actual */}
      <img src={imagenes[imagenIndex]} alt="imagen" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      <PieDePagina valorDolar={100} clima="Soleado" datoAdicional="Sin demoras en las calles" />
    </div>
  );
};

export default VentanaInicioSesion;