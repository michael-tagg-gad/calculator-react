import "./Screen.css"
import { Textfit } from 'react-textfit'

import React from 'react'

function Screen({value}) {
    return (
        <Textfit className="screen" mode="single" max={70}>
            {value}
        </Textfit>
    )
}

export default Screen;
