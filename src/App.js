
import './App.css';

import { useDispatch , useSelector } from 'react-redux';
import {Add , Remove ,Multiply , Divide} from "./store/action"
import { useState } from 'react';

function App() {

  const [num , setNum] = useState();
  
  //const [count , setCount] = useState(0);
  let userValue=0;
  const getInputValue =(e) => {
      userValue = e.target.value;
      setNum(userValue)
      
  }

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  
  return (
    
    <div className="App">
      <h2>Counter:{state.count}</h2>
      <div>
       <button onClick={()=> dispatch(Add(1))}>+</button>
       <button onClick={()=> dispatch(Remove(1))}>-</button>
       <br></br>
       <input placeholder='enter number' onChange={getInputValue}></input>

       <button onClick={()=> dispatch(Multiply(num))}>Multiply</button>
       <button onClick={()=> dispatch(Divide(num))}>Divide</button>
       <button onClick={()=> dispatch(Add(num))}>Add</button>
       <button onClick={()=> dispatch(Remove(num))}>Substract</button>
     

      </div>
    </div>
  );
}

export default App;
