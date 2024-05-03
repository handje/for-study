import React, { useState } from "react";
import Form from "./Form";

function App() {
  const [year, setYear] = useState(1990);
  const [stringRes, setStringRes] = useState("성인?미성년자?");
  const [age, setAge] = useState(0);

  return (
    <div className="App">
      <Form
        value={year}
        onChange={(e) => {
          setYear(e.target.value);
        }}
        onClick={() => {
          setAge(2024 - year);
          if (2024 - year > 19) {
            setStringRes("성인");
          } else {
            setStringRes("미성년자");
          }
        }}
      ></Form>
      <h1>{stringRes}</h1>
      <h1>{age}</h1>
    </div>
  );
}

export default App;
