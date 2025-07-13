import React, { useState } from 'react'

function Adddata() {
    let [input, setInput] = useState({})
    let changeInput = (Event) => {
        const value = Event.target.value;
        const name = Event.target.name;
        setInput(a => ({ ...a, [name]: value, }))
    }
    console.log(input);
    return (
        <div>
            <h1>Add Data</h1>
            <input type="text" name="title" />
            <input type="text" name="price" />
            <button>submit</button>
        </div>
    )
}

export default Adddata;