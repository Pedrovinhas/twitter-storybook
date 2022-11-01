import { Meta, StoryObj } from '@storybook/react'
import { Aside, AsideProps } from './Aside'
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
	title: 'Sections/Aside',
	component: Aside,
	args: {
       
	},
	argTypes: {
		
	},
	decorators: [withRouter]
} as Meta<AsideProps>

export const Default: StoryObj<AsideProps> = {}