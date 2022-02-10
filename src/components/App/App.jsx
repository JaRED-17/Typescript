import React from 'react'
import './App.css'
import Header from '../Header/Header'
import ToDoList from '../ToDoList/ToDoList'

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <ToDoList />
        </div>
    )
}

export default App
