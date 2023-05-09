import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cm = (...classes: ClassValue[]) => {
	return twMerge(clsx(classes));
};
