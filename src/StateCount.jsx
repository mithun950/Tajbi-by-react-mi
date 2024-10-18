import { useState } from "react"
import './Count.css'

export default function StateCounter (){
    const [state1, setCount1] = useState(0)
    const [state2, setCount2] = useState(0)
    const [state3, setCount3] = useState(0)

//    count btn 1
    const handleBtn1 = () =>{
        // // normally jemne lekha jae
        // const newState = state + 1;
        // setCount(newState);


        // simple kore lekhle

        setCount1(state1 + 1);
    }

    // count btn 2
    const handleBtn2 = () =>{
        

        setCount2(state2 + 1);
    }

    // count btn 3
    const handleBtn3 = () =>{
        
        setCount3(state3 + 1);
    }

    const styleCount = {
        display: 'flex',
        gap: '90px'
    }
    const allCount = (state1 + state2 + state3)
   

    return (
    <div>
            <div style={styleCount}>
                <h3>Count : {state1}</h3>
                <h3>Count : {state2}</h3>
                <h3>Count : {state3}</h3>
            </div>

            
        <button className="btn" onClick={handleBtn1}>Allahuakbar</button>
        <button className="btn" onClick={handleBtn2}>La ilaha illallah</button>
        <button className="btn" onClick={handleBtn3}>Astagfirullah</button>
        <h3>All Count :{allCount}</h3>
    </div>

    
    )
    
}