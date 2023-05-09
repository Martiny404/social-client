import { withLayout } from '@/components/layouts/main-layout';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Paragraph } from '@/components/ui/paragraph';
import { Title } from '@/components/ui/title';

function Home() {
	return (
		<div>
			<h1 className='text-6xl'>hello</h1>
			<Paragraph weight='regular'>
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
		</div>
	);
}

export default withLayout(Home);
