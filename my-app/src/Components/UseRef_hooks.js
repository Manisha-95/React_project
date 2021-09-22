import { useRef, useState } from 'react';
import MovieApi from './MovieApi';

function Reference() {
    const inputRef = useRef();
    const [data,setdata]= useState();
function clickHandler() 
    {
      console.log(inputRef.current.value);
      setdata(inputRef.current.value);
    }
      return(
        <div className="App">
          <input ref = {inputRef} placeholder="Enter here..." type='number' />
          <button onClick={clickHandler}>search</button>
          <MovieApi inputvalue={data}/>
        </div>
      );
    }
    
    export default Reference;
    