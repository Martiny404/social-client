import { cm } from '@/libs/cm';
import { VariantProps, cva } from 'class-variance-authority';
import { HTMLAttributes, forwardRef, useMemo } from 'react';
import { Icon, IconType } from './icon';
import clsx from 'clsx';

const button_variants = cva(
	'flex items-center py-[6px] px-4 text-center rounded-radius-8 font-medium',
	{
		variants: {
			variant: {
				primary:
					'bg-overlay-primary text-secondary-color ease-in-out transition-opacity duration-150 hover:opacity-90',
				secondary:
					'bg-overlay-secondary text-overlay-primary transition-colors duration-200 ease-in-out hover:bg-overlay-secondary-hover',
				outline:
					'border-overlay-primary border text-overlay-primary  transition-colors duration-200 ease-in-out hover:bg-steel-gray',
				commerce:
					'text-white bg-apple ease-in-out transition-opacity duration-150 hover:opacity-90',
				tertiary:
					'text-overlay-primary transition-colors duration-200 ease-in-out hover:bg-steel-gray',
			},
			size: {
				small: 'text-sm tracking-ls-2 min-w-[75px] min-h-[30px] leading-[18px]',
				big: 'min-w-[78px] text-[15px] leading-5 min-h-[36px]',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'small',
		},
	}
);

interface ButtonProps
	extends HTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof button_variants> {
	loading?: boolean;
	icon?: IconType;
	rightIcon?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			onClick,
			children,
			variant,
			size = 'small',
			loading = false,
			icon,
			rightIcon = false,
			...props
		},
		ref
	): JSX.Element => {
		const hasIcon = useMemo(
			() => (loading || icon ? true : false),
			[icon, loading]
		);

		const iconStyles = useMemo(
			() =>
				clsx({
					'ml-2': !rightIcon && size == 'small' && hasIcon,
					'mr-2': rightIcon && size == 'small' && hasIcon,
					'ml-3': !rightIcon && size == 'big' && hasIcon,
					'mr-3': rightIcon && size == 'big' && hasIcon,
				}),
			[size, rightIcon, hasIcon]
		);

		return (
			<button
				onClick={onClick}
				ref={ref}
				className={cm(button_variants({ variant, size, className }), {
					'flex-row-reverse': rightIcon,
					'cursor-wait': loading,
				})}
				disabled={loading}
				{...props}
			>
				{loading && (
					<Icon
						className='animate-spin -ml-1'
						icon='spinner'
						stroke='currentColor'
					/>
				)}
				{icon && !loading && (
					<Icon
						className={clsx({
							'h-[18px] w-[18px]': size == 'small',
							'h-6 w-6': size == 'big',
						})}
						icon={icon}
					/>
				)}
				<span className={iconStyles}>{children}</span>
			</button>
		);
	}
);

Button.displayName = 'Button';
