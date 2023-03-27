import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/styles.scss';
import { ThemeProvider } from './context/ThemeContext';
import { DataProvider } from './context/DataContext';
import './utilities';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider>
			<DataProvider>
				<App />
			</DataProvider>
		</ThemeProvider>
	</React.StrictMode>,
);
