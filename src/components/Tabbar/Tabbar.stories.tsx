import { Meta, StoryObj } from '@storybook/react'
import { Tabbar, TabbarProps } from '.'
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
	title: 'components/Tabbar',
	component: Tabbar,
	args: {
       
	},
	decorators: [withRouter],
	argTypes: {
		
	}
} as Meta<TabbarProps>

export const Default: StoryObj<TabbarProps> = {}