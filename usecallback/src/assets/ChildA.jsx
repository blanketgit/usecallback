import { memo } from "react";

import React from 'react'

const ChildA = ({Learning}) => {

    console.log("child componrent is being rendred");
//const {a,b}=props. this is destructuring props(noaml vrble a and state vrbl "add") re
  return (
    <div>
        {/* {a} abcd
        <p>{b}</p> */}
        abcd
</div>
  )
}

export default memo(ChildA)


{/*The reason why the message “child component is being rendered” is not 
logging to the console for each click on the button Addition after using
 memo is because memo prevents unnecessary re-rendering of the 
 child component when its props do not change.


 =>>AND in our case we haven't passed any props to child component from parent componnt
so the <ChildA/> component does not render after initial rendering
**)BUTif we would have passed props like this to "<ChildA a={a} b={add}/>"
even after using memo hook if one of the props changes then the <ChildA/> will re-render

 */}

 {/* When you use memo to wrap the ChildA component, you are telling React to memoize the output of the component and skip re-rendering it unless its props change. In your case, the prop a is a constant string “vishal” that does not change when you click the button Addition. Therefore, React does not re-render the ChildA component and does not invoke the console.log statement inside it.

However, if you change the prop a to be a state variable that changes when you click the button Addition, then React will re-render the ChildA component and log the message to the console. For example, you can write:

function App() { const [add, setAdd] = useState(0)

let a = vishal ${add}; // Change a to be a state variable

return (<div classsName="App">
 <h1>learning usecallback</h1>

 <ChildA a={a}/>
Copy
<h1>{add}</h1> <button onClick={()=>{setAdd(add+1)}}>Addition</button> {/* {console.log(“addition has been clicked”)} */}
{/*
</div>
Copy
) }

export default App

Now, every time you click the button Addition, the value of a will change and React will re-render the ChildA component and log the message to the console.*/}