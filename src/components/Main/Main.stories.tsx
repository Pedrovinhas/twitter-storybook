import { Meta, StoryObj } from '@storybook/react'
import { Main, MainProps } from '.'
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
	title: 'Sections/Main',
	component: Main,
	args: {
       
	},
	argTypes: {
		
	},
	decorators: [withRouter]
	
} as Meta<MainProps>

export const Default: StoryObj<MainProps> = {}