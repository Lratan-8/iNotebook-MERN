import React,{useState} from 'react';
import NoteContext from './noteContext'

const NoteState = (props) =>{

    const state = {
        "name" : "Luv",
        "age" : "24"
    };

    const [first, setfirst] = useState(state);

    const update = () =>{
        setTimeout(()=>{
            setfirst({
                "name" : "Ratan",
                "age" : "successful"
            })
        },2000)
    }

    return (
        <NoteContext.Provider value={{first, update}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;