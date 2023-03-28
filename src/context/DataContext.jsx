import { createContext, useEffect, useState } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const [todos, setTodos] = useState(
		JSON.parse(localStorage.getItem('todos')) || [],
	);
	const [filter, setFilter] = useState('all');
	const [filteredTodos, setFilteredTodos] = useState(todos);

	useEffect(() => {
		setFilteredTodos(
			filter === 'all'
				? todos
				: todos.filter(todo =>
						filter === 'active' ? !todo.complete : todo.complete,
				  ),
		);
	}, [filter, todos]);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	return (
		<DataContext.Provider
			value={{
				todos,
				setTodos,
				filter,
				setFilter,
				filteredTodos,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
