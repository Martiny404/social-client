import { FC, forwardRef } from 'react';
import { Input, TextInputProps } from './input';
import { Icon } from '../icon';
import { useState } from 'react';

type InputType = 'text' | 'password';

export const PasswordInput = forwardRef<HTMLInputElement, TextInputProps>(
	({ error, className, label, ...props }, ref): JSX.Element => {
		const [type, setType] = useState<InputType>('password');

		const onClick = () => {
			const newType: InputType = type == 'password' ? 'text' : 'password';
			setType(newType);
		};

		const rightSection = (
			<Icon
				icon={type == 'password' ? 'hide_20' : 'view_20'}
				onClick={onClick}
			/>
		);

		return (
			<Input
				type={type}
				error={error}
				className={className}
				label={label}
				rightSection={rightSection}
				{...props}
				ref={ref}
			/>
		);
	}
);

PasswordInput.displayName = 'PasswordInput';
