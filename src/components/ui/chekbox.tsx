import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import { FieldError } from 'react-hook-form';
import { Icon } from './icon';

export interface CheckboxProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	placeholder: string;
	error?: Error;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ className, placeholder, error, ...props }, ref): JSX.Element => {
		return (
			<div className={className}>
				<label className='flex items-center'>
					<input
						className='hidden checkbox-ui'
						ref={ref}
						type='checkbox'
						{...props}
					/>
					<span className='relative w-[25px] h-[25px] rounded-radius-8 border-2 border-heather  transition-colors ease-in-out duration-200 checkbox-ui-fake'>
						<Icon
							className='fill-white opacity-0 transition-opacity ease-in-out duration-200 checkbox-ui-fake-icon w-[16px] h-[16px] absolute
							top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
							icon='check_20'
						/>
					</span>
					<span className='ml-[13px] tracking-ls-1 text-base'>
						{placeholder}
					</span>
				</label>
				{error && <div className={''}>{error.message}</div>}
			</div>
		);
	}
);

Checkbox.displayName = 'Checkbox';
