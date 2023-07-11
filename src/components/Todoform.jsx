import React, { useState } from 'react';
import '../App.css'
import Todolist from './Todolist';


const Todoform = () => {

    const [inputText,setInputText] = useState('');
    const [todos, setTodos] = useState([]); 

    function clickHandler() {
    }


    return (
        <div className='form'>
            <h1>Whats Your Plan Today?</h1>
            <div className='incont'>
                <input type="text" />
                <button onClick={clickHandler}>Add Todo</button>
            </div>
            <div>
                <ul>
                    
                </ul>
            </div>
        </div>
    );
}

export default Todoform;
