import React,  {useState} from "react"
// export function Introduction(props) {
export function Introduction({foo}) { // use props instead of {foo} for the original
    let [baz, setBaz] = useState("start");
    // return (<div>"Hi" {props.foo}</div>);
    function changeBaz(){
        setBaz("changed");
    }
    return (<div>
        "Hi" 
        {foo} 
        {baz}
            <button onClick = {changeBaz} >
                Click Me
            </button>
        </div>);
    
}
