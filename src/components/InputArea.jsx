import React, { useState } from "react";

function InputArea(props) {
	const [inputText, setInputText] = useState("");
	function handleChange(event) {
		const item = event.target.value;
		setInputText(item);
	}

	return (
		<form
			className="form"
			onSubmit={(event) => {
				props.onAdd(inputText);
				setInputText("");
				event.preventDefault();
				document.querySelector("input").focus();
			}}>
			<input type="text" onChange={handleChange} autoFocus value={inputText} required />
			<button>
				<span>Add</span>
			</button>
		</form>
	);
}

export default InputArea;
