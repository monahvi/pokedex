import React from "react";

const Logo = () => {
   const appName = "Mohammad";
  return (
      <header>
      <h1>"Welcome to the {appName} 's Pokedex"</h1>
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="logo">
      </img>
    </header>
  );
};

export default Logo;