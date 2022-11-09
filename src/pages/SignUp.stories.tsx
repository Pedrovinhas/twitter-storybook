import { Meta, StoryObj } from '@storybook/react'
import { SignUp, SignUpProps } from './SignUp'
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
	title: 'pages/SignUp',
	component: SignUp,
	args: {
       
	},
	argTypes: {
		
	},
	decorators: [withRouter]
	
} as Meta<SignUpProps>

export const Default: StoryObj<SignUpProps> = {}