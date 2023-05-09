import { getFromLocalStorage, saveToLocalStorage } from '@/libs/local-storage';
import {
	FC,
	PropsWithChildren,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';

export type Theme = 'dark' | 'light';

interface ThemeContextState {
	theme: Theme;
	toggle: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextState | null>(null);

const ThemeProvider = ThemeContext.Provider;

export const ThemeContextProvider: FC<PropsWithChildren> = ({
	children,
}): JSX.Element => {
	const [theme, setTheme] = useState<Theme>('light');

	useEffect(() => {
		const current = getFromLocalStorage<Theme>('theme');

		if (current) {
			setTheme(current);
		}
	}, []);

	useEffect(() => {
		saveToLocalStorage('theme', theme);
		const html = document.documentElement;
		html.dataset['theme'] = theme;
	}, [theme]);

	const toggleDark = (newTheme: Theme) => {
		setTheme(newTheme);
	};
	return (
		<ThemeProvider value={{ theme, toggle: toggleDark }}>
			{children}
		</ThemeProvider>
	);
};

export const useTheme = () => {
	const data = useContext(ThemeContext);
	if (!data) {
		throw new Error(
			"Can not use 'ThemeContext' outside of the 'ThemeProvider!"
		);
	}
	return data;
};
