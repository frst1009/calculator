import React from 'react'
import { useDispatch } from 'react-redux';
import { addText, resetCalculate, calculate } from '../redux/slice';
import Input from './Input';
import History from './History';


function Calculator({ isDarkMode, setMode }) {

    const dispatch = useDispatch();
    
    const handleButtonClick = (e) => {
        const name = e.target.name;
        console.log({name});
        let obj;
        if (["+", "-", "*", "/"].includes(name)) {
            obj = {
                type: "operation",
                name: name,
            };
        } else {
            obj = {
                type: "number",
                name: name,
            };
        }
        dispatch(addText(obj)); 
    };
      
     
  return (

    <div className={`container ${isDarkMode ? 'dark-container' : 'light-container'}`}>
        <div style={{ backgroundColor:  (isDarkMode)?  '#2A2C38': '#ddd'}} className="mode-name">
            <button style={{color: (isDarkMode)? '#fff' : '#000', backgroundColor:  (isDarkMode)?  '#353D4F': '#ddd'}} onClick={()=>setMode(true)} className="mode-name">
            <i className="fa-solid  fa-moon"></i>
            </button>

            <button style={{color: (isDarkMode)? '#fff' : '#000',  backgroundColor:  (isDarkMode)?  '#2A2C38': '#fff'}} onClick={()=>setMode(false)} className='mode-name'>
            <i className="fa-solid  fa-sun"></i>
            </button>
        </div>
        <History isDarkMode={isDarkMode}/>
        <Input/>
  <div className={`calc ${isDarkMode ? 'dark-calc' : 'light-calc'}`}>
            <button className={`${isDarkMode ? 'dark-button' : 'light-button'}`} style={{visibility:"hidden"}} name="<-">
                {/* &lt;-- */}
                </button> 
            <button className={`${isDarkMode ? 'dark-button' : 'light-button'}`} onClick={() => {
                      dispatch(resetCalculate());
                    }} name="C">C</button>
            <button className={`${isDarkMode ? 'dark-button' : 'light-button'}`}  onClick={handleButtonClick} name="/">/</button>
            <button  className={`${isDarkMode ? 'dark-button' : 'light-button'}`} onClick={handleButtonClick} name="+">+</button>

            <div  className='name'><button  className={`${isDarkMode ? 'dark-button' : 'light-button'}`} onClick={handleButtonClick} name="7">7</button></div>
            <div  className='name'><button className={`${isDarkMode ? 'dark-button' : 'light-button'}`}  onClick={handleButtonClick} name="8">8</button></div>
            <div  className='name'><button className={`${isDarkMode ? 'dark-button' : 'light-button'}`}  onClick={handleButtonClick} name="9">9</button></div>
            <div  className='name'><button className={`${isDarkMode ? 'dark-button' : 'light-button'}`}  onClick={handleButtonClick} name="-">-</button></div>

            <div  className='name'> <button className={`${isDarkMode ? 'dark-button' : 'light-button'}`}  onClick={handleButtonClick} name="4">4</button></div>
            <div  className='name'><button className={`${isDarkMode ? 'dark-button' : 'light-button'}`}  onClick={handleButtonClick} name="5">5</button></div>
            <div  className='name'><button className={`${isDarkMode ? 'dark-button' : 'light-button'}`}  onClick={handleButtonClick} name="6">6</button></div>
            <div  className='name'><button className={`${isDarkMode ? 'dark-button' : 'light-button'}`}  onClick={handleButtonClick} name="*">*</button> </div>

             <div  className='name'><button  className={`${isDarkMode ? 'dark-button' : 'light-button'}`} onClick={handleButtonClick} name="1">1</button></div>
             <div  className='name'><button  className={`${isDarkMode ? 'dark-button' : 'light-button'}`} onClick={handleButtonClick} name="2">2</button></div>
             <div  className='name'><button className={`${isDarkMode ? 'dark-button' : 'light-button'}`}  onClick={handleButtonClick} name="3">3</button></div>
             <div  className='name'><button className={`${isDarkMode ? 'dark-button' : 'light-button'}`}  color='golden'
               onClick={() => {
                dispatch(calculate());
              }}
             name="=">=</button></div>
            <div  className='name'> <button  className={`${isDarkMode ? 'dark-button' : 'light-button'}`} onClick={handleButtonClick} name="0">0</button></div> 
           
            <button  className={`${isDarkMode ? 'dark-button' : 'light-button'}`} onClick={handleButtonClick} name=".">.</button>
            
        </div>
    </div>
  )
}

export default Calculator