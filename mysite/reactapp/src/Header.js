import React from 'react';
import minhaImagem from './Imagens/fundo.jpg'

function Header() {
  return (
    <header className="header">
      <img
        src={minhaImagem}
        alt="Imagem de relaxamento"
        className="header-image"
      />
      <h1 className="header-title">Burnout..E agora?</h1>
    </header>
  );
}

export default Header;
