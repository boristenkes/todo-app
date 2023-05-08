import { useState } from 'react';
import './TodoInput.scss';
import { useContext } from 'react';
import DataContext from '../../context/DataContext';
import { v4 as uuid } from 'uuid';

export default function TodoInput() {
	const { todos, setTodos } = useContext(DataContext);
	const [todo, setTodo] = useState('');

	const addTodo = e => {
		e.preventDefault();
		if (!todo) return;

		const newTodo = {
			id: uuid(),
			complete: false,
			todo: todo
		};

		setTodos([...todos, newTodo]);
		setTodo('');
	};

	return (
		<form
			onSubmit={addTodo}
			className='todo-input--form'
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
