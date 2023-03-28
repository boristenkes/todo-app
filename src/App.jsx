import { Banner, Header, TodoInput, TodoList } from './components';
import DataContext from './context/DataContext';
import { useContext } from 'react';

function App() {
	const { todos } = useContext(DataContext);

	return (
		<>
			<Banner />
			<main className='container'>
				<Header />
				<TodoInput />
				{!!todos.length && <TodoList />}
			</main>
		</>
	);
}

export default App;
