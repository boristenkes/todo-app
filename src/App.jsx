import { Banner, Header, TodoInput, TodoList } from './components';

function App() {
	return (
		<>
			<Banner />
			<main className='container'>
				<Header />
				<TodoInput />
				<TodoList />
			</main>
		</>
	);
}

export default App;
