import { Meta, StoryObj } from '@storybook/react'
import { SideMenu, SideMenuProps } from './SideMenu'
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
	title: 'sections/SideMenu',
	component: SideMenu,
	args: {
       
	},
	decorators: [withRouter],
	argTypes: {
		
	}
} as Meta<SideMenuProps>

export const Default: StoryObj<SideMenuProps> = {}