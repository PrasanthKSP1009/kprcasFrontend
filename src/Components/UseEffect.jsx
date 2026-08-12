import { useEffect, useState } from "react";

const UseEffect = () => {
  var [text, setText] = useState("");
  useEffect(() => {
    console.log(text);
  },[text]);
  return (
    <div>
      <h1>Use Effect starts</h1>
      Type your text:
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h4>{text}</h4>
    </div>
  );
};
export default UseEffect;
