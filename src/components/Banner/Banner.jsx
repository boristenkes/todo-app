import './Banner.scss';
import { banners } from '../../assets/images';
import { useMediaQuery } from 'react-responsive';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

export default function Banner() {
	const { theme } = useContext(ThemeContext);
	const device = useMediaQuery({ query: '(min-width: 65em)' })
		? 'desktop'
		: 'mobile';

	return (
		<div
			className='banner'
			style={{ backgroundImage: `url(${banners[device][theme]})` }}
		/>
	);
}
