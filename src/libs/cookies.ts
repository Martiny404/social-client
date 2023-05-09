import Cookies from 'js-cookie';

export const setToCookies = (key: string, value: string) => {
	Cookies.set(key, value);
};

export const getFromCookies = <T>(key: string): T | null => {
	const data = Cookies.get(key);

	if (!data) {
		return null;
	}
	return data as T;
};
