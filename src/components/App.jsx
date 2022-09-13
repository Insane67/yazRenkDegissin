import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("#000000");

  return (
    <div className="container" style={{ background: color }}>
      <h1>
        Renk Kodunu yaz ve div background rengi değişsin input text ile birlikte
      </h1>
      <input
        type="text"
        onChange={(e) => {
          const { value } = e.target;
          setColor(value);
        }}
        style={{ color: color }}
      />
    </div>
  );
}

export default App;
