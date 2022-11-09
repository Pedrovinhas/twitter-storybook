import { Meta, StoryObj } from '@storybook/react'
import { Home, HomeProps } from './Home'
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
	title: 'pages/Home',
	component: Home,
	args: {
       
	},
	argTypes: {
		
	},
	decorators: [withRouter]
	
} as Meta<HomeProps>

export const Default: StoryObj<HomeProps> = {}