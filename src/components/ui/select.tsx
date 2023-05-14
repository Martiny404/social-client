import { DetailedHTMLProps, SelectHTMLAttributes, forwardRef } from 'react';

interface SelectItem {
	label: string;
	value: string;
}

interface SelectProps
	extends DetailedHTMLProps<
		SelectHTMLAttributes<HTMLSelectElement>,
		HTMLSelectElement
	> {
	data: SelectItem[];
	error?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
	({ data, value, onChange, error }, ref): JSX.Element => {
		return (
			<div>
				<select
					className='p-3 bg-form-bg rounded-radius-8 text-primary-color max-h-52 overflow-y-scroll'
					ref={ref}
					value={value}
					onChange={onChange}
				>
					{data.map(item => (
						<option value={item.value} key={item.value}>
							{item.label}
						</option>
					))}
				</select>
				{error && <div className='mt-2 text-crimson'>{error}</div>}
			</div>
		);
	}
);

Select.displayName = 'Select';
