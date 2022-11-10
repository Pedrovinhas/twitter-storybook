import { Meta, StoryObj } from '@storybook/react'
import { ModalRegister, ModalRegisterProps } from '.'
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
	title: 'components/ModalRegister',
	component: ModalRegister,
	args: {
       
	},
	argTypes: {
		
	},
	decorators: [withRouter]
	
} as Meta<ModalRegisterProps>

export const Default: StoryObj<ModalRegisterProps> = {}