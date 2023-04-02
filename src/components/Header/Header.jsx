import './Header.scss';
import { icons } from '../../assets/icons';
import ThemeContext from '../../context/ThemeContext';
import { useContext } from 'react';

export default function Header() {
	const { theme, setTheme, isDarkTheme } = useContext(ThemeContext);

	return (
		<header className='header | section-padding'>
			<h1 className='header__logo'>TODO</h1>
			<button
				onClick={() => setTheme(isDarkTheme ? 'light' : 'dark')}
				className='header__theme-switcher'
				aria-label={`Switch to ${isDarkTheme ? 'light' : 'dark'} theme`}
			>
				{icons[theme]}
			</button>
		</header>
	);
}
