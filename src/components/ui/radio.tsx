import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react';
import radioButtonStyles from './radio-button.module.css';
import clsx from 'clsx';

export interface RadioButtonProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	placeholder: string;
	name: string;
	error?: Error;
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
	({ className, placeholder, name, error, ...props }, ref): JSX.Element => {
		return (
			<div className={className}>
				<label className='flex items-center'>
					<input
						className='hidden radio-ui'
						ref={ref}
						type='radio'
						name={name}
						{...props}
					/>
					<span className='inline-block w-[22px] h-[22px] relative rounded-full border-[3px] border-heather transition-colors ease-in-out duration-200 radio-ui-fake'></span>
					<span className='ml-[13px] tracking-ls-1 text-base'>
						{placeholder}
					</span>
				</label>
				{error && <div className={''}>{error.message}</div>}
			</div>
		);
	}
);

RadioButton.displayName = 'RadioButton';
