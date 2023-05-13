import { withLayout } from '@/components/layouts/main-layout';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/chekbox';
import { Icon } from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Paragraph } from '@/components/ui/paragraph';
import { RadioButton } from '@/components/ui/radio';
import { Select } from '@/components/ui/select';
import { Title } from '@/components/ui/title';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

const data = [
	{
		label: 'Пицца',
		value: 'pizza',
	},
	{
		label: 'Гамбургер',
		value: 'hamburger',
	},
	{
		label: 'Сырный ролл',
		value: 'cheese_roll',
	},
	{
		label: 'Оливье',
		value: 'olivie',
	},
	{
		label: 'Борщ',
		value: 'borsh',
	},
	{
		label: 'Цезарь',
		value: 'caesar_salad',
	},
	{
		label: 'Гречневая каша',
		value: 'grechka',
	},
];

interface F {
	select: string;
	check: boolean;
	pol: string;
}

const sex = [
	{
		label: 'Мужской',
		value: 'male',
	},
	{
		label: 'Женский',
		value: 'female',
	},
	{
		label: 'Empty',
		value: 'empty',
	},
];

function Home() {
	const { control, setValue, handleSubmit, register } = useForm<F>({
		mode: 'onChange',
		defaultValues: {
			check: true,
			pol: 'empty',
			select: 'olivie',
		},
	});

	const onSubmit: SubmitHandler<F> = data => {
		console.log(data);
	};

	return (
		<div>
			<h1 className='text-6xl'>hello</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					control={control}
					name='select'
					render={({ field: { value } }) => (
						<Select
							data={data}
							id='menu-select'
							initialValue={value}
							onChangeSelected={(value: string) => setValue('select', value)}
							className='max-w-sm'
							label='Выберите элемент'
						/>
					)}
				/>
				<Checkbox placeholder='Вы согласы?' {...register('check')} />
				{sex.map(item => (
					<RadioButton
						key={item.value}
						value={item.value}
						placeholder={item.label}
						{...register('pol')}
					/>
				))}
				<Button>asdas</Button>
			</form>

			{/* <Select data={data} id='menu-select' /> */}
			{/* <Paragraph weight='regular'>
				Далеко-далеко за словесными горами в стране гласных и согласных, живут
				рыбные тексты. Предложения родного свой рекламных, курсивных власти,
				инициал, грустный своих эта запятой оксмокс семантика.
			</Paragraph>
			<Paragraph weight='medium'>
				Далеко-далеко за словесными горами в стране гласных и согласных, живут
				рыбные тексты. Предложения родного свой рекламных, курсивных власти,
				инициал, грустный своих эта запятой оксмокс семантика.
			</Paragraph>
			<Title>Hello world!</Title>
			<Icon icon='add_20' />
			<Icon icon='comment_outline_24' />
			<Icon icon='view_outline_24' />
			<Icon icon='hide_outline_24' />
			<br />
			<Button variant='primary' icon='arrow_down_outline_24' size='small'>
				Primary
			</Button>
			<br />
			<Button variant='secondary' rightIcon icon='article_box_outline_24'>
				Secondary
			</Button>
			<br />
			<Button variant='commerce'>Commerce</Button>
			<br />
			<Button variant='outline'>Outline</Button>
			<Button variant='tertiary'>Outline</Button>
			<Button variant='outline' loading>
				Outline
			</Button>
			<br />
			<div className='shadow-tooltip-shadow'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
				accusantium facilis perferendis quaerat veritatis? Qui veritatis, porro
				alias, sint deserunt expedita consequuntur aliquid consequatur sapiente,
				beatae impedit molestias suscipit saepe.
			</div>
			<div className='h-24 w-24 bg-gradient-black-top-bottom'></div>
			<br />
			<Input placeholder='Введите имя' icon='hide_20' /> */}
		</div>
	);
}

export default withLayout(Home);
