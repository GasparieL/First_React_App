import React,  {useState} from "react"
// export function Introduction(props) {
export function Introduction({foo, setName}) { // use props instead of {foo} for the original
    let [baz, setBaz] = useState("start");
    let [nameInput, setNameInput] = useState("");
    // return (<div>"Hi" {props.foo}</div>);
    function changeBaz(){
        setBaz("changed");
    }

    return (<div>
        Hi, what is your name?
        <br />
        <input type="text" onChange = {(event)=>{setNameInput(event.target.value);}}/>
        <br />
        <button onClick = {()=>{setName(nameInput);}} >
                Save
        </button>
        {/* {foo}  */}
        {/* {setName} */}
        {/* {baz}
            <button onClick = {changeBaz} >
                Click Me
            </button> */}
        </div>);
    
}
