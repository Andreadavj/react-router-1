import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css'; // Si deseas agregar estilos personalizados

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Página No Encontrada</h1>
      <p>Oops! La página que buscas no existe.</p>
      <p>
        Tal vez quieras volver a la <Link to="/">página de inicio</Link>.
      </p>
      <img 
        src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Página no encontrada" 
        className="not-found-image" 
      />
    </div>
  );
};

export default NotFound;
