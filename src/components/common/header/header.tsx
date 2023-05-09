import { useTheme } from '@/context/theme-context';
import { FC } from 'react';

export const Header: FC = (): JSX.Element => {
	const { toggle, theme } = useTheme();

	const changeTheme = () => {
		const newTheme = theme == 'dark' ? 'light' : 'dark';
		toggle(newTheme);
	};

	return (
		<header className='bg-orange-500 p-4'>
			<button
				className='p-4  bg-secondary-color text-primary-color rounded-lg'
				onClick={changeTheme}
			>
				{theme}
			</button>
		</header>
	);
};
