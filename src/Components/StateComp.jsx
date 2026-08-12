import { useState } from "react";
var StateComponentEg = () =>{
    var [value,setValue] = useState(0);
    return(
        <div>
            <h2>State Example</h2>
            <button onClick = {()=>setValue(value-1)}>-</button>
            <h1>{value}</h1>
            <button onClick = {()=>setValue(value+1)}>+</button>
            <button onDoubleClick = {()=>setValue(0)}>Reset</button>
        </div>
    )
}
export default StateComponentEg