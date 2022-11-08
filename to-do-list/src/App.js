import logo from './logo.svg';
import './App.css';
import Input from './components/input';
import List from './components/list';
import Summary from './components/summary';
function App() {
  const toDos = [
    {id: '1', name: 'eating', finish: true},
    {id: '2', name: 'sleeping', finish: true},
    {id: '3', name: 'playing', finish: false},
  ]

  const renderInputValue = (value) => {
    console.log("app1" + value)
  }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="logo">
          <img src={logo} alt="to do list" />
        </div>
        <Input parentFunction = {renderInputValue}/>
        <List toDos = {toDos} />
        <Summary />
      </div>
    </div>
  )
}

export default App;
