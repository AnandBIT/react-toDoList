import React, { useState } from "react";
import InputArea from "./InputArea";
import List from "./ToDoItem";

function App() {
	const [itemsArray, setItems] = useState([]);

	function handleSubmit(inputText) {
		setItems((prevValue) => {
			return [...prevValue, inputText];
		});
	}

	function deleteItem(id) {
		setItems((prevItems) => {
			return prevItems.filter((item, index) => index !== id);
		});
	}

	return (
		<div className="container">
			<div className="heading">
				<h1>To-Do List</h1>
			</div>
			<InputArea onAdd={handleSubmit} />
			<div>
				<ul>
					{itemsArray.map((item, index) => (
						<List key={index} id={index} content={item} onChecked={deleteItem} />
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
