import './index.css';
function Item(details) {
	const {finish, name} = details[1]
  return (
		<ul className='items'>
			<li className="item">
				<input type="checkbox" name="hobby" defaultChecked={finish}/> <span> {name}</span><button style={{display: 'none'}}>Remove</button>
			</li>
		</ul>

  );
}

export default Item;
