import { useEffect, useRef, useState } from "react";

const UseRef = () => {
    var [text,setText] = useState("")
    var previousRender = useRef();
    useEffect(()=>{
        previousRender.current = text
    },[text])
    return(
        <div>
            <h1>This is useRef Example.</h1>
            This is a text Box for Use Ref: 
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <h2>Current Render is: {text}</h2>
            <h3>Previous Render is: {previousRender.current}</h3>
        </div>
    )
}
export default UseRef;