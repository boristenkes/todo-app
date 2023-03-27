import { createContext, useEffect, useState } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const [todos, setTodos] = useState(
		JSON.parse(localStorage.getItem('todos')) || [],
	);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	return (
		<DataContext.Provider value={{ todos, setTodos }}>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
