import { useContext, useEffect, useState } from 'react';
import DataContext from '../../context/DataContext';
import { icons } from '../../assets/icons';
import { useMediaQuery } from 'react-responsive';
import { ImCheckmark as Check } from 'react-icons/im';

export default function TodoItem({ todo, ...props }) {
	const { todos, setTodos } = useContext(DataContext);
	const [isChecked, setIsChecked] = useState(todo.complete);
	const isMobile = useMediaQuery({ query: '(max-width: 40em)' });
	const [isHovered, setIsHovered] = useState(false);

	const deleteTodo = () => {
		const filteredTodos = todos.filter(item => item.id !== todo.id);
		setTodos(filteredTodos);
	};

	useEffect(() => {
		const changedTodos = todos.map(item =>
			item.id === todo.id ? { ...item, complete: isChecked } : item,
		);
		setTodos(changedTodos);
	}, [isChecked]);

	return (
		<div
			className='todo-list__item'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			{...props}
		>
			<label htmlFor={todo.id}>
				<input
					id={todo.id}
					type='checkbox'
					checked={isChecked}
					onChange={() => setIsChecked(prev => !prev)}
				/>
				<Check className='check-icon' />
			</label>
			<p>{todo.todo}</p>
			{(isMobile || isHovered) && (
				<button onClick={deleteTodo}>{icons.cross}</button>
			)}
		</div>
	);
}
