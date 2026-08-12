import { useMemo, useState } from "react";

function slowFunction(num) {
  for (var a = 0; a < 1000000000; a++) {}
  return num * 2;
}
var UseMemo = () => {
  var [number, setNumber] = useState(0);
  var [theme, setTheme] = useState(false);
  var doubleUpANumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  var styling = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };
  return (
    <div>
      
      <h1>This is useMemo Example.</h1>
      <div style={styling}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <h2>Number is {number}</h2>
        <h3>Double Number is {doubleUpANumber}</h3>
        <button onClick={() => setTheme(!theme)}>Toggle theme</button>
      </div>
    </div>
  );
};
export default UseMemo;
