import logo from './logo.svg';
import './App.css';
import Input from './components/input';
import List from './components/list';
import Summary from './components/summary';
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="logo">
          <img src={logo} alt="to do list" />
        </div>
        <Input />
        <List />
        <Summary />
      </div>
    </div>
  )
}

export default App;
