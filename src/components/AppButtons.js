// Créer un composant App contenant 3 boutons.

import React, { useState } from 'react';
import '../App.css';
function App() {
  const [clickedButton, setClickedButton] = useState(null);

  const handleClick = (buttonNumber) => {
    setClickedButton(buttonNumber);
  };

  return (
    <div>
      <button onClick={() => handleClick(1)}>Button 1</button>
      <button onClick={() => handleClick(2)}>Button 2</button>
      <button onClick={() => handleClick(3)}>Button 3</button>
      {clickedButton && <p>Button {clickedButton} was clicked</p>}
    </div>
  );
}

export default App;
