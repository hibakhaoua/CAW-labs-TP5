// src/components/DisplayTab.js
import React, { useState } from 'react';
import '../App.css';
// Question 1: Display the table as an unordered list (<ul>)
const DisplayTab1 = () => {
  const tab = ["hello", "world", "from", "react"];

  return (
    <div>
      
      <ul>
        {tab.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// Question 2: Display the elements with indices, e.g. Element 1 is: hello
const DisplayTab2 = () => {
  const tab = ["hello", "world", "from", "react"];

  return (
    <div>
     
      <ul>
        {tab.map((item, index) => (
          <li key={index}>Element {index + 1} is: {item}</li>
        ))}
      </ul>
    </div>
  );
};

// Question 3: Add a click event to remove the element
const DisplayTab3 = () => {
  const [tab, setTab] = useState(["hello", "world", "from", "react"]);

  const handleClick = (index) => {
    const newTab = tab.filter((_, idx) => idx !== index);
    setTab(newTab);
  };

  return (
    <div>
      
      <ul>
        {tab.map((item, index) => (
          <li key={index} onClick={() => handleClick(index)}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// Question 4: Parameterize the DisplayTab component using props
const DisplayTab4 = ({ tab }) => {
  return (
    <div>
  
      <ul>
        {tab.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// Question 5: Write an App component containing 2 DisplayTab components with different tables
const App = () => {
  const tab1 = ["hello", "world", "from", "react"];
  const tab2 = ["apple", "banana", "cherry", "date"];

  return (
    <div>
      <h1>App with two DisplayTabs</h1>
      <DisplayTab4 tab={tab1} />
      <DisplayTab4 tab={tab2} />
    </div>
  );
};

export { DisplayTab1, DisplayTab2, DisplayTab3, DisplayTab4, App };
