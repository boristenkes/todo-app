import './TodoOptions.scss';
import DataContext from '../../context/DataContext';
import { useContext } from 'react';

const filterOptions = [
	{
		option: 'all',
		label: 'All',
	},
	{
		option: 'active',
		label: 'Active',
	},
	{
		option: 'completed',
		label: 'Completed',
	},
];

export default function TodoOptions() {
	const { todos, setTodos, filter, setFilter } = useContext(DataContext);
	const todosLeft = todos.reduce(
		(acc, todo) => (!todo.complete ? acc + 1 : acc),
		0,
	);

	const clearCompleted = () => {
		const clearedTodos = todos.filter(todo => !todo.complete);
		setTodos(clearedTodos);
	};

	return (
		<div className='todo-options'>
			<p className='todo-options__counter'>
				{todosLeft} todo{todosLeft !== 1 && 's'} left
			</p>
			<div className='todo-options__filter'>
				{filterOptions.map(opt => (
					<label
						className='todo-options__filter--label'
						key={opt.option}
						htmlFor={`filter-${opt.option}`}
					>
						{opt.label}
						<input
							className='todo-options__filter--input'
							id={`filter-${opt.option}`}
							type='radio'
							name='todo-filter'
							checked={filter === opt.option}
							onChange={() => setFilter(opt.option)}
						/>
					</label>
				))}
			</div>
			<button
				className='todo-options__clear'
				onClick={clearCompleted}
			>
				Clear Completed
			</button>
		</div>
	);
}
