import React from "react";

const BestPokemon = () => {

  const abilities = ["Anticipation", "Adaptability", "Run-Away"];

   return (
   <div>
      <p>My favorite Pokemon is Squirtle</p>
        <ul>
          {
            abilities.map((name) => (<li>{name}</li>))
          }
        </ul>
   </div>
   );
};

export default BestPokemon;