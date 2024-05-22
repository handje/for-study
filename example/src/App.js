import React, { useState } from "react";
import Form from "./Form";

function App() {
  const [mode, setMode] = useState(false);

  return (
    <div className="App">
      {mode ? (
        <Form setMode={setMode} />
      ) : (
        <button
          onClick={() => {
            setMode(true);
          }}
        >
          Start!
        </button>
      )}
    </div>
  );
}

export default App;
