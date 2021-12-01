import React, { useState } from 'react';
import "./MyButton.css";

function MyButton({initial, setLastButtonClicked}) {

    console.log(setLastButtonClicked)
    const [variable, setVariable] = useState(parseInt(initial));

    const handleButtonClick = () => {
        setVariable(variable + 1);
    
    }

    return (

    <div className="button" onClick={() => handleButtonClick()}>
        <p>Click Me ({variable})</p>
    </div>
  
    )
}

export default MyButton
