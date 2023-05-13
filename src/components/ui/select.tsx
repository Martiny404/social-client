import {
	ChangeEvent,
	DetailedHTMLProps,
	InputHTMLAttributes,
	KeyboardEventHandler,
	forwardRef,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { Input } from './input';
import { useOutside } from '@/hooks/use-outside';
import clsx from 'clsx';
import { Icon } from './icon';

interface SelectItem {
	label: string;
	value: string;
}

interface SelectProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	data: SelectItem[];
	initialValue?: string;
	disabled?: boolean;
	onChangeSelected: (value: string) => void;
	id: string;
	label: string;
}

export const Select = forwardRef<HTMLInputElement, SelectProps>(
	(
		{ initialValue, data, id, onChangeSelected, className, label },
		ref
	): JSX.Element => {
		const [value, setValue] = useState<SelectItem>(() => {
			if (initialValue) {
				const current = data.find(item => item.value == initialValue);
				if (current) {
					return current;
				}
			}
			return data[0];
		});

		const [input, setInput] = useState(value.label);

		const { isShow, ref: container, setIsShow } = useOutside(false);

		const [search, setSearch] = useState('');

		const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
			setInput(e.target.value);
			setSearch(e.target.value);
		};

		const options = useMemo(() => {
			const newOpts = data.filter(item => item.label.includes(search));
			return newOpts;
		}, [search, data]);

		useEffect(() => {
			onChangeSelected(value.value);
		}, [value, onChangeSelected]);

		useEffect(() => {
			setInput(value.label);
		}, [value]);

		useEffect(() => {
			if (!isShow) {
				setInput(value.label);
				setSearch('');
			}
		}, [isShow, value]);

		const setItem = (item: SelectItem) => {
			setValue(item);
			setIsShow(false);
		};

		const handleListKeyDown: KeyboardEventHandler<HTMLUListElement> = e => {
			const currentIdx = data.findIndex(item => item.value === value.value);
			switch (e.key) {
				case 'Escape':
				case ' ':
				case 'SpaceBar':
				case 'Enter':
					e.preventDefault();
					setIsShow(false);
					break;
				case 'ArrowUp':
					e.preventDefault();
					const upIndex =
						currentIdx - 1 >= 0 ? currentIdx - 1 : data.length - 1;
					setValue(data[upIndex]);
					break;
				case 'ArrowDown':
					e.preventDefault();
					const downIndex = currentIdx == data.length - 1 ? 0 : currentIdx + 1;
					setValue(data[downIndex]);
					break;
				default:
					break;
			}
		};

		return (
			<div ref={container} className={clsx('relative', className)}>
				<Input
					value={input}
					id={id}
					onChange={inputChange}
					onFocus={() => setIsShow(true)}
					label={label}
					icon={isShow ? 'chevron_up_outline_20' : 'dropdown_outline_20'}
				/>
				{isShow && (
					<ul
						className='absolute top-[78px] z-[1] left-0 bg-form-bg py-1 w-full shadow-tooltip-shadow rounded-radius-8 max-h-44 overflow-scroll'
						onKeyDown={handleListKeyDown}
						tabIndex={-1}
					>
						{options.length ? (
							options.map((item, idx) => (
								<li
									className={clsx(
										'mb-1 last:mb-0 hover:bg-overlay-secondary-hover px-3 flex justify-between  items-center',
										{
											'bg-overlay-secondary-hover': item.value === value.value,
										}
									)}
									tabIndex={0}
									onClick={() => setItem(item)}
									key={`${item.label}-${item.value}-${idx}`}
								>
									<span>{item.label}</span>
									{item.value === value.value ? (
										<Icon
											icon='done_16'
											className='w-4 h-4 fill-curious-blue-1'
										/>
									) : null}
								</li>
							))
						) : (
							<span className='px-3'>Не найдено!</span>
						)}
					</ul>
				)}
			</div>
		);
	}
);

Select.displayName = 'Select';
