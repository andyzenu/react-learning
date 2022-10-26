import logo from './logo.svg';
import './App.css';
import Input from './components/input';
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="logo">
          <img src={logo} alt="to do list" />
        </div>
        <Input />
      </div>
    </div>
  )
}

export default App;