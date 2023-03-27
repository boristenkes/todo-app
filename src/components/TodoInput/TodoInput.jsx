import { useState } from 'react';
import './TodoInput.scss';

export default function TodoInput() {
	const [todo, setTodo] = useState('');

	const addTodo = e => {
		e.preventDefault();
		setTodo('');
	};

	return (
		<form
			onSubmit={addTodo}
			className='todo-input--form | section-padding'
		>
			<label
				className='todo-input--label'
				htmlFor='todoInput'
			>
				<input
					className='todo-input'
					id='todoInput'
					type='text'
					placeholder='Create a new todo...'
					spellCheck='false'
					autoComplete='off'
					value={todo}
					onChange={e => setTodo(e.target.value)}
				/>
			</label>
		</form>
	);
}
