import Item from '../item';
import './index.css';
function List(items) {
	const list = items.toDos
  return (
    <div className="list">
			{
				Object.entries(list).map( item => {
					return <Item key={item[1].id} {...item} />
				})
			}

    </div>
  );
}

export default List;
