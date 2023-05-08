import './FilterOptions.scss';
import { useContext } from 'react';
import DataContext from '../../context/DataContext';

const filterOptions = [
	{
		option: 'all',
		label: 'All'
	},
	{
		option: 'active',
		label: 'Active'
	},
	{
		option: 'completed',
		label: 'Completed'
	}
];

export default function FilterOptions({ separated = false }) {
	const { filter, setFilter } = useContext(DataContext);

	return (
		<div className={`todo-options__filter ${separated ? 'separated' : ''}`}>
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
	);
}
