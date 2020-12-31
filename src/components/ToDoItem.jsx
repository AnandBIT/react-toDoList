import React from "react";

function List(props) {
	return (
		<div className="list-box">
			<li>
				({props.id + 1}) {props.content}
			</li>
			<div
				className="delete-box"
				onClick={() => {
					props.onChecked(props.id);
				}}>
				&times;
			</div>
		</div>
	);
}

export default List;
