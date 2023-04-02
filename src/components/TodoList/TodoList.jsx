import './TodoList.scss';
import DataContext from '../../context/DataContext';
import { useContext } from 'react';
import { TodoOptions, FilterOptions } from '../../components';
import TodoItem from './TodoItem';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { StrictModeDroppable } from '../../helpers/StrictModeDroppable';
import { useMediaQuery } from 'react-responsive';

export default function TodoList() {
	const { todos, setTodos, filteredTodos } = useContext(DataContext);
	const isDesktop = useMediaQuery({ query: '(min-width: 40em)' });

	const handleOnDragEnd = result => {
		if (!result.destination) return;

		const tasks = [...todos];
		const [reorderedTodo] = tasks.splice(result.source.index, 1);

		tasks.splice(result.destination.index, 0, reorderedTodo);

		setTodos(tasks);
	};

	return (
		<DragDropContext onDragEnd={handleOnDragEnd}>
			<div className='todo-list--wrapper'>
				<StrictModeDroppable droppableId='todos'>
					{provided => (
						<ul
							className='todo-list'
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{filteredTodos.map((todo, index) => (
								<Draggable
									key={todo.id}
									draggableId={todo.id}
									index={index}
								>
									{provided => (
										<li
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											ref={provided.innerRef}
										>
											<TodoItem todo={todo} />
										</li>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</ul>
					)}
				</StrictModeDroppable>
				<TodoOptions />
			</div>
			{!isDesktop && <FilterOptions separated />}
			<p
				style={{
					fontFamily: 'var(--ff-primary)',
					color: 'var(--clr-neutral-500)',
					textAlign: 'center',
					marginTop: '3rem',
				}}
			>
				Drag and drop to reorder the list
			</p>
		</DragDropContext>
	);
}
