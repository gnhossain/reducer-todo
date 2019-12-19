import React from 'react';
import logo from './logo.svg';
import './App.css';

import TodoForm from './components/TodoForm'

function App() {

    return (
      <div className='App'>

        <header>
         <h1>Reducer Todo</h1> 
          </header>
        <TodoForm />
      </div>
    )
}

export default App;
