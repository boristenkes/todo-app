import './TodoOptions.scss';
import DataContext from '../../context/DataContext';
import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FilterOptions } from '../../components';

export default function TodoOptions() {
	const { todos, setTodos } = useContext(DataContext);
	const todosLeft = todos.reduce(
		(acc, todo) => (!todo.complete ? acc + 1 : acc),
		0,
	);
	const isDesktop = useMediaQuery({ query: '(min-width: 40em)' });

	const clearCompleted = () => {
		const clearedTodos = todos.filter(todo => !todo.complete);
		setTodos(clearedTodos);
	};

	return (
		<div className='todo-options'>
			<p className='todo-options__counter'>
				{todosLeft} todo{todosLeft !== 1 && 's'} left
			</p>
			{isDesktop && <FilterOptions />}
			<button
				className='todo-options__clear'
				onClick={clearCompleted}
			>
				Clear Completed
			</button>
		</div>
	);
}
