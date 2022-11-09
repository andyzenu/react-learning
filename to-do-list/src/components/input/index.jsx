import './index.css'
const Input = (props) => {
	const doSomething = (event) => {
		if (event.key === 'Enter' || event.keyCode === 13) {
			const newTodo = {
				id: Date.now(),
				name: event.target.value,
				finish: false
			}
			props.parentFunction(newTodo)
		}
	}

  return (
    <div className="input">
      <input type="text" placeholder="Enter Your Hobby" className="input" onKeyUp={doSomething}/>
			<button type="submit" className="btn btn-primary">Add</button>
    </div>
  );
}

export default Input;
