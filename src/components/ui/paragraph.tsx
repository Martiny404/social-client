import { cm } from '@/libs/cm';
import { VariantProps, cva } from 'class-variance-authority';
import { HTMLAttributes, forwardRef } from 'react';

const paragraph_variants = cva(
	'tracking-ls-1 leading-5 text-[15px] text-primary-color',
	{
		variants: {
			weight: {
				regular: 'font-normal',
				medium: 'font-medium',
			},
		},
		defaultVariants: {
			weight: 'regular',
		},
	}
);

interface ParagraphProps
	extends HTMLAttributes<HTMLParagraphElement>,
		VariantProps<typeof paragraph_variants> {}

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
	({ children, weight, className, ...props }, ref): JSX.Element => {
		return (
			<p
				ref={ref}
				{...props}
				className={cm(paragraph_variants({ weight, className }))}
			>
				{children}
			</p>
		);
	}
);

Paragraph.displayName = 'Paragraph';
