//Convertir le bouton précédent en un bouton de bascule
import React, { useState } from 'react';
import '../App.css';
function ToggleButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(prevClicked => !prevClicked); // Bascule l'état
  };

  return (
    <div>
      <button onClick={handleClick}>ClickMe</button>
      <p>{clicked ? "Clicked" : "Not Clicked"}</p>
    </div>
  );
}

export default ToggleButton;
