import { useCallback, useState } from 'react'

import './App.css'
import ChildA from './assets/ChildA'


function App() {
  const [add, setAdd] = useState(0)
 
  let a="vishal";
     
const Learning=useCallback(()=>{
  console.log("paasing this function as props");
},[])

  return (

    <div classsName="App">
     <h1>learning usecallback</h1>

{/*<ChildA/ a={a} b={add} >  earlier passed normal varialle "a" and state varible 
     "add" as prop. now  in the below line passing function "Learning" as prop*/}
     
     <ChildA  Learning={Learning}  />
      
  <h1>{add}</h1>
  <button  onClick={()=>{setAdd(add+1)}}>Addition</button>
{/* {console.log("addition has been clicked")} */}

    </div>
      
    
  )
}

export default App
