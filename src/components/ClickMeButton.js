//Créer un composant qui affiche un bouton étiqueté "ClickMe" et 
//affiche un paragraphe avec le texte "Clicked" lorsque le bouton est cliqué.
import React, { useState } from 'react';
import '../App.css';
function ClickMeButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div>
      <button onClick={handleClick}>ClickMe</button>
      {clicked && <p>Clicked</p>}
    </div>
  );
}

export default ClickMeButton;
