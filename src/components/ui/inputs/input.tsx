import {
	DetailedHTMLProps,
	InputHTMLAttributes,
	ReactNode,
	forwardRef,
} from 'react';
import clsx from 'clsx';
import { cm } from '@/libs/cm';
import { FieldError } from 'react-hook-form';

export interface TextInputProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	error?: string;
	label?: string;
	rightSection?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, TextInputProps>(
	(
		{ className, error, label, type, rightSection, ...props },
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
						type={type}
						className={cm(
							'w-full bg-form-bg border-[0.5px] border-transparent-black rounded-radius-8 p-3 outline-curious-blue-1 text-primary-color tracking-ls-1 leading-5 outline-[0.5px] placeholder:text-regent-gray',
							{
								'text-crimson border-crimson': error,
							}
						)}
						ref={ref}
						{...props}
					/>
					{rightSection && (
						<span className='absolute top-1/2 right-[10px] -translate-y-1/2 cursor-pointer flex items-center'>
							{rightSection}
						</span>
					)}
				</label>
				{error && <div className='mt-2 text-crimson'>{error}</div>}
			</div>
		);
	}
);

Input.displayName = 'Input';
