// App.js
import React from 'react';
import ClickMeButton from './components/ClickMeButton'; // Exercice 1 - 1
import ToggleButton from './components/ToggleButton'; // Exercice 1 - 2
import AppButtons from './components/AppButtons'; // Exercice 1 - 3
import Counter from './components/Counter'; // Exercice 1 - 4
import { DisplayTab1, DisplayTab2, DisplayTab3, DisplayTab4 } from './components/DisplayTab';// Exercice 2 (Toutes les questions dans DisplayTab)

import AuthForm from './components/AuthForm'; // Exercice 3
import AddDivForm from './components/AddDivForm'; // Exercice 4


function App() {
  const tab1 = ["hello", "world", "from", "react"];
  const tab2 = ["apple", "banana", "cherry", "date"];

  return (
    <div>
      {/* Exercice 1 - 1 */}
      <h2>Exercice 1 - 1</h2>
      <ClickMeButton />

      {/* Exercice 1 - 2 */}
      <h2>Exercice 1 - 2</h2>
      <ToggleButton />

      {/* Exercice 1 - 3 */}
      <h2>Exercice 1 - 3</h2>
      <AppButtons />

      {/* Exercice 1 - 4 */}
      <h2>Exercice 1 - 4</h2>
      <Counter />
      {/* Exercice 2 - 1 */}
      <h2>Exercice 2 - 1</h2>
      <DisplayTab1 />

      {/* Exercice 2 - 2 */}
      <h2>Exercice 2 - 2</h2>
      <DisplayTab2 />

      {/* Exercice 2 - 3 */}
      <h2>Exercice 2 - 3</h2>
      <DisplayTab3 />

      {/* Exercice 2 - 4 */}
      <h2>Exercice 2 - 4</h2>
      <DisplayTab4 tab={tab1} />
      <DisplayTab4 tab={tab2} />

      {/* Exercice 3 */}
      <h2>Exercice 3</h2>
      <AuthForm />

      {/* Exercice 4 */}
      <h2>Exercice 4</h2>
      <AddDivForm />

      
    </div>
  );
}

export default App;


//npx create-react-app my-app
//cd my-app
//npm start