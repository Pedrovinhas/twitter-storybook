import { Meta, StoryObj } from '@storybook/react'
import { PerfilSection, PerfilSectionProps } from '.'
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
	title: 'sections/PerfilSection',
	component: PerfilSection,
	args: {
       
	},
	decorators: [withRouter],
	argTypes: {
		
	}
} as Meta<PerfilSectionProps>

export const Default: StoryObj<PerfilSectionProps> = {}