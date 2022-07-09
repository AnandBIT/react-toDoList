import React from 'react';
import { MdDelete } from 'react-icons/md';

function List({ id, content, onChecked }) {
	return (
		<div className='list-box'>
			<li className='text-left p-2 list-none text-lg sm:text-base'>{content}</li>
			<div
				className='delete-box'
				onClick={() => {
					onChecked(id);
				}}
				title='delete'
			>
				<svg height='45' width='45'>
					<circle
						cx='22.5'
						cy='22.5'
						r='20'
						stroke='red'
						strokeWidth='2.5'
						fill='none'
					></circle>
				</svg>

				<MdDelete size='17px' className='absolute' />
			</div>
		</div>
	);
}

export default React.memo(List);
