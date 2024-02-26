
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
// import Cabecera from './componentes/Cabecera';
// import PieDePagina from './componentes/PieDePagina';
// import VentanaMovimientos from './componentes/VentanaMovimientos';
// import VentanaSaldo from './componentes/VentanaSaldo';
// import Rectangulo from './componentes/Rectangulo';

// const App = () => {
//   const valorDolar = 100;
//   const clima = 'Soleado';
//   const datoAdicional = 'Sin demoras en las calles';

//   const handleCerrarSesionClick = () => {
//     // Lógica para manejar el clic en el botón de cerrar sesión
//   };

//   return (
//     <Router>
//       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
//         <Cabecera onCerrarSesion={handleCerrarSesionClick} />
//         <Routes>
//           <Route path="/movimientos" element={<VentanaMovimientos />} />
//           <Route path="/saldo" element={<VentanaSaldo />} /> {/* Agrega la ruta para VentanaSaldo */}
//           <Route path="/" element={<Home />} />
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//         <PieDePagina valorDolar={valorDolar} clima={clima} datoAdicional={datoAdicional} />
//       </div>
//     </Router>
//   );
// };

// const Home = () => (
//   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
//     <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
//       <Link to="/saldo" style={{ textDecoration: 'none' }}>
//         <Rectangulo text="VER SALDO" />
//       </Link>
//       <Link to="/movimientos" style={{ textDecoration: 'none' }}>
//         <Rectangulo text="VER MOVIMIENTOS" />
//       </Link>
//       <Rectangulo text="HACER TRANSFERENCIA" />
//       <Rectangulo text="MI PERFIL" />
//     </div>
//   </div>
// );

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Cabecera from './componentes/Cabecera';
import PieDePagina from './componentes/PieDePagina';
import VentanaMovimientos from './componentes/VentanaMovimientos';
import VentanaSaldo from './componentes/VentanaSaldo';
import Rectangulo from './componentes/Rectangulo';
import VentanaInicioSesion from './componentes/VentanaInicioSesion'; // Nueva ventana para iniciar sesión

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para verificar si el usuario ha iniciado sesión

  const handleCerrarSesionClick = () => {
    setIsLoggedIn(false); // Lógica para cerrar la sesión del usuario
  };

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
        {/* Verifica si el usuario ha iniciado sesión antes de mostrar la cabecera y el contenido */}
        {isLoggedIn ? (
          <>
            <Cabecera onCerrarSesion={handleCerrarSesionClick} />
            <Routes>
              <Route path="/movimientos" element={<VentanaMovimientos />} />
              <Route path="/saldo" element={<VentanaSaldo />} />
              <Route path="/" element={<Home />} />
              {/* Ruta para redirigir a la raíz si se intenta acceder a una ruta no definida */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <PieDePagina />
          </>
        ) : (
          // Si el usuario no ha iniciado sesión, muestra la ventana de inicio de sesión
          <VentanaInicioSesion onIniciarSesion={() => setIsLoggedIn(true)} />
        )}
      </div>
    </Router>
  );
};

const Home = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <Link to="/saldo" style={{ textDecoration: 'none' }}>
        <Rectangulo text="VER SALDO" />
      </Link>
      <Link to="/movimientos" style={{ textDecoration: 'none' }}>
        <Rectangulo text="VER MOVIMIENTOS" />
      </Link>
      <Rectangulo text="HACER TRANSFERENCIA" />
      <Rectangulo text="MI PERFIL" />
    </div>
  </div>
);

export default App;