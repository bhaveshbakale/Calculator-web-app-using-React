import React from "react";
import Button from "./Button";
import OutputScreen from "./OutputScreen"; 
import { useState } from "react";
function Home(){

  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(input);
        setResult(evalResult);
        setInput('');
      } catch (error) {
        setResult('Math Error');
        setInput('');
      }
    } else if (value === 'Clear') {
      setInput('');
      setResult('');
    } else {
      setInput((prev) => prev + value);
    }
  };

  var v=add();
  function add(){
           v=20;
           v++;
          var x=22;
          document.getElementsByClassName("result").innerHTML="Changed";
          return v;
  }
    return(
        <>
        <div className="container">
        <h1>Home</h1>
        
        </div>
        <div className="d-flex justify-content-center">
        <div id="carouselExampleControls" class="carousel slide w-50" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/68525/soap-colorful-color-fruit-68525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
        <div className="container">
        <h1>Calculator app</h1>
        <div className="">
        <OutputScreen /> 
                    <div className="button-row"> 
                        <Button label={"Clear"} /> 
                        <Button label={"Delete"} /> 
                        <Button label={"."} /> 
                        <Button label={"/"} /> 
                    </div> 
                    <div className="button-row"> 
                        <Button label={"7"} /> 
                        <Button label={"8"} /> 
                        <Button label={"9"} /> 
                        <Button label={"*"} /> 
                    </div> 
                    <div className="button-row"> 
                        <Button label={"4"} /> 
                        <Button label={"5"} /> 
                        <Button label={"6"} /> 
                        <Button label={"-"} /> 
                    </div> 
                    <div className="button-row"> 
                        <Button label={"1"} /> 
                        <Button label={"2"} /> 
                        <Button label={"3"} /> 
                        <Button label={"+"} /> 
                    </div> 
                    <div className="button-row"> 
                        <Button label={"0"} /> 
                        <Button label={"="} /> 
                    </div> 

                    <div className="calculator">
      <h2>React Calculator</h2>
      <div className="screen">
        <input type="text" readOnly value={input} placeholder="0" />
        <input type="text" readOnly value={result} placeholder="Result" />
      </div>
      <div className="button-row">
        {['7', '8', '9', '/'].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
        {['4', '5', '6', '*'].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
        {['1', '2', '3', '-'].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button className="equals" onClick={() => handleClick('=')}>=</button>
        <button className="clear" onClick={() => handleClick('Clear')}>Clear</button>
      </div>
    </div>
          
        </div>
        </div>
       
        
        
       
        
        </>
    );
}
export default Home;