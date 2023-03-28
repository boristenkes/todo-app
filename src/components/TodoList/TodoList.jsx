import './TodoList.scss';
import DataContext from '../../context/DataContext';
import { useContext } from 'react';
import { TodoOptions } from '../../components';
import TodoItem from './TodoItem';

export default function TodoList() {
	const { filteredTodos } = useContext(DataContext);

	return (
		<div className='todo-list--wrapper'>
			<ul className='todo-list'>
				{filteredTodos.map(todo => (
					<TodoItem
						key={todo.id}
						todo={todo}
					/>
				))}
			</ul>
			<TodoOptions />
		</div>
	);
}
