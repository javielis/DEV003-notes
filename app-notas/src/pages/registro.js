import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Registrarme</button>
    </div>
  );
}

export default App;









// import React from "react";

// export default function Title() {
//   return (
//     <div className="title">
//       <h1>Todo App</h1>
//     </div>
    
//   );
// }