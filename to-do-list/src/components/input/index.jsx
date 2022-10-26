import './index.css';
function Input() {
  return (
    <div className="input">
      <input type="text" placeholder="Enter Your Hobby" className="input"/>
			<button type="submit" className="btn btn-primary">Add</button>
    </div>
  );
}

export default Input;
