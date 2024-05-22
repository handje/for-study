import React, { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  return (
    <div>
      <h1>사용자 정보 입력</h1>
      <div>
        <label for="text">이름</label>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="name"
        />
      </div>
      <div>
        <label for="date">생년월일</label>
        <input
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
          type="date"
          placeholder="age"
        />
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          window.alert(`welcome ${name}!`);
          props.setMode(false);
        }}
      >
        ok
      </button>
    </div>
  );
};

export default Form;
