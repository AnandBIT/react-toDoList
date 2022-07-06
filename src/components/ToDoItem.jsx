import React from 'react';

function List({ id, content, onChecked }) {
	return (
		<div className='list-box'>
			<li>{content}</li>
			<div
				className='delete-box'
				onClick={() => {
					onChecked(id);
				}}
			>
				&times;
			</div>
		</div>
	);
}

export default React.memo(List);
