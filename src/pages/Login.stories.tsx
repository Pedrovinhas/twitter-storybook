import { Meta, StoryObj } from '@storybook/react'
import { Login, LoginProps } from './Login'
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
	title: 'pages/Login',
	component: Login,
	args: {
       
	},
	argTypes: {
		
	},
	decorators: [withRouter]
	
} as Meta<LoginProps>

export const Default: StoryObj<LoginProps> = {}