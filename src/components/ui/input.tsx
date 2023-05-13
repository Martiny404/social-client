import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import { Icon, IconType } from './icon';

export interface TextInputProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	error?: Error;
	label?: string;
	icon?: IconType;
	iconClick?: () => void;
}

export const Input = forwardRef<HTMLInputElement, TextInputProps>(
	(
		{ className, error, label, icon, iconClick = () => {}, ...props },
		ref
	): JSX.Element => {
		return (
			<div className={clsx('flex flex-col', className)}>
				{label && (
					<span className='text-pale-sky mb-2 text-sm tracking-ls-2'>
						{label}
					</span>
				)}
				<label className='relative'>
					<input
						type='text'
						className={clsx(
							'w-full bg-form-bg border-[0.5px] border-transparent-black rounded-radius-8 p-3 outline-curious-blue-1 text-primary-color tracking-ls-1 leading-5 outline-[0.5px] placeholder:text-regent-gray',
							{
								'bg-light-pink border-crimson outline-crimson': error,
							}
						)}
						ref={ref}
						{...props}
					/>
					{icon && (
						<Icon
							icon={icon}
							className='absolute top-1/2 right-[10px] -translate-y-1/2 cursor-pointer w-5 h-5'
							onClick={iconClick}
						/>
					)}
				</label>
				{error && <div className='mt-2 text-crimson'>{error.message}</div>}
			</div>
		);
	}
);

Input.displayName = 'Input';
