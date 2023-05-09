import { cm } from '@/libs/cm';
import { VariantProps, cva } from 'class-variance-authority';
import { FC, HTMLAttributes, forwardRef } from 'react';

const title_variants = cva('text-primary-color', {
	variants: {
		tag: {
			h1: 'text-2xl leading-7',
			h2: 'text-xl leading-6',
			h3: 'text-lg leading-5',
			h4: 'text-base leading-5',
		},
		weight: {
			regular: 'font-normal',
			medium: 'font-medium',
			bold: 'font-bold',
		},
	},
	defaultVariants: {
		weight: 'bold',
		tag: 'h1',
	},
});

interface TitleProps
	extends HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof title_variants> {}

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
	({ weight, tag, children, className, ...props }, ref): JSX.Element => {
		return (
			<h1 className={cm(title_variants({ tag, weight, className }))} ref={ref}>
				{children}
			</h1>
		);
	}
);

Title.displayName = 'Title';
