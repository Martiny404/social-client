import { FC, FunctionComponent, PropsWithChildren } from 'react';
import { Header } from '../common/header/header';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<footer>footer</footer>
		</>
	);
};

export const withLayout = <T extends Record<string, unknown>>(
	Component: FunctionComponent<T>
) => {
	return function withLayoutComponent(props: T) {
		return (
			<MainLayout>
				<Component {...props} />
			</MainLayout>
		);
	};
};
