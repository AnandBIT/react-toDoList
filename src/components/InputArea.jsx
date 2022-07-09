import React, { useState } from 'react';

function* generateSerialNumbers() {
	var id = 0;
	while (++id) yield id;
}

const getNumbers = generateSerialNumbers();

function InputArea({ onAdd }) {
	const [inputText, setInputText] = useState('');
	function handleChange(event) {
		const item = event.target.value;
		setInputText(item);
	}

	return (
		<form
			className='form flex items-center justify-center mb-5 sm:mb-4'
			onSubmit={(event) => {
				event.preventDefault();
				onAdd({
					itemID: getNumbers.next().value,
					item: inputText,
				});
				setInputText('');
				document.querySelector('input').focus();
			}}
		>
			<input
				type='text'
				onChange={handleChange}
				autoFocus
				value={inputText}
				required
			/>
			<button className='flex items-center justify-center'>
				<span>Add</span>
			</button>
		</form>
	);
}

export default React.memo(InputArea);
