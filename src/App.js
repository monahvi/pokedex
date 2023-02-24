import React from "react";
import Logo from "./Components/Logo";
import BestPokemon from "./Components/BestPokemon";
import CaughtPokemon from "./Components/CaughtPokemon";


const App = () => {


  return (
  <div>
    <Logo appName ="Mohammad" />
    <BestPokemon abilities = {["Anticipation", "Adaptability", "Run-Away"]}/>
    <CaughtPokemon date = {new Date().toLocaleDateString()}/>
  </div>);
};



export default App;
