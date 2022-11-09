import * as React from "react";
import logo from './logo.svg';
import './App.css';
import Input from './components/input';
import List from './components/list';
import Summary from './components/summary';


function App() {
  const items = [
    {id: 1, name: 'eating', finish: true},
    {id: 2, name: 'sleeping', finish: true},
    {id: 3, name: 'playing', finish: false},
  ]

  const [todos, setTodos] = React.useState(items)

  const renderInputValue = (toDoObj) => {
    setTodos((todos) => todos.concat([toDoObj]))
  }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="logo">
          <img src={logo} alt="to do list" />
        </div>
        <Input parentFunction = {renderInputValue}/>
        <List toDos = {todos} />
        <Summary />
      </div>
    </div>
  )
}

export default App;
