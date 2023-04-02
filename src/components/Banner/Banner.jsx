import './Banner.scss';
import { banners } from '../../assets/images';
import { useMediaQuery } from 'react-responsive';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

const themes = ['dark', 'light'];

export default function Banner() {
	const { theme: currentTheme } = useContext(ThemeContext);
	const device = useMediaQuery({ query: '(min-width: 65em)' })
		? 'desktop'
		: 'mobile';

	return (
		<div className='banner'>
			{themes.map(theme => (
				<img
					key={theme}
					className={currentTheme === theme ? 'active' : ''}
					src={banners[device][theme]}
					alt=''
				/>
			))}
		</div>
	);
}
