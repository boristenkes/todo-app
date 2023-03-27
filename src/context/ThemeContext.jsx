import { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
	const defaultTheme = localStorage.getItem('theme')
		? localStorage.getItem('theme')
		: window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
	const [theme, setTheme] = useState(defaultTheme);
	const isDarkTheme = theme === 'dark';
	const isLightTheme = theme === 'light';

	useEffect(() => {
		document.documentElement.dataset.theme = theme; // Change `data-theme` on `html` tag
		localStorage.setItem('theme', theme); // Save prefered theme to local storage
	}, [theme]);

	return (
		<ThemeContext.Provider
			value={{
				theme,
				setTheme,
				isDarkTheme,
				isLightTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContext;
