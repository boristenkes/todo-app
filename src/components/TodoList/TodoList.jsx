import './TodoList.scss';
import DataContext from '../../context/DataContext';
import { useContext } from 'react';
import TodoItem from './TodoItem';

export default function TodoList() {
	const { todos } = useContext(DataContext);

	return (
		<div className='todo-list--wrapper'>
			<ul className='todo-list'>
				{todos.map(todo => (
					<TodoItem
						key={todo.id}
						todo={todo}
					/>
				))}
			</ul>
		</div>
	);
}
