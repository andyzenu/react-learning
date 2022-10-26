import './index.css';
function Item() {
  return (
		<ul className='items'>
			<li className="item">
				<input type="checkbox" name="hobby"/><span>Item 1</span><button style={{display: 'none'}}>Remove</button>
			</li>
		</ul>

  );
}

export default Item;
