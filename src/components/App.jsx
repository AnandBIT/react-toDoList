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
				<div className='heading flex items-center justify-center mb-4 sm:mb-6'>
					<h1 className='hover:text-[blue] font-bold'>To-Do List</h1>
				</div>
				<InputArea onAdd={handleSubmit} />
			</div>

			<div className='p-4 sm:p-2'>
				<ul className='px-2 grid gap-4 sm:gap-2'>
					{itemsArray.map(({ itemID, item }) => {
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
