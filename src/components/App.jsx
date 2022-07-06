import React, { useCallback, useState } from 'react';
import InputArea from './InputArea';
import List from './ToDoItem';

function App() {
	const [itemsArray, setItems] = useState([]);

	const handleSubmit = useCallback((inputText) => {
		setItems((prevValue) => {
			return [...prevValue, inputText];
		});
	}, []);

	const deleteItem = useCallback((deleteID) => {
		setItems((prevItems) => {
			return prevItems.filter(({ itemID }) => !Object.is(itemID, deleteID));
		});
	}, []);

	return (
		<div className='container'>
			<div className='top-part'>
				<div className='heading'>
					<h1>To-Do List</h1>
				</div>
				<InputArea onAdd={handleSubmit} />
			</div>

			<div className='list'>
				<ul>
					{itemsArray.map(({ itemID, item }, index) => {
						return (
							<List
								key={itemID}
								id={itemID}
								content={item}
								onChecked={deleteItem}
							/>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default App;
