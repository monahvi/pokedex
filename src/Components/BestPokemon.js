import React from "react";

const BestPokemon = (props) => {

  // const abilities = ["Anticipation", "Adaptability", "Run-Away"];

   return (
   <div>
      <p>My favorite Pokemon is Squirtle</p>
        <ul>
          {
            props.abilities.map((name) => (<li>{name}</li>))
          }
        </ul>
   </div>
   );
};

export default BestPokemon;