import { Meta, StoryObj } from '@storybook/react'
import { House } from 'phosphor-react'
import { Heading } from './Heading'
import { Icon } from './Icon'
import { MenuItem, MenuItemProps } from './MenuItem'

export default {
	title: 'Components/MenuItem',
	component: MenuItem,
	args: {
		children: (
			<>
			<Icon size='medium' children={<House />}/>
			<Heading size="lg">
				Home
			</Heading>   
			</>
		)
	},
	argTypes: {
		
	}
} as Meta<MenuItemProps>

export const Default: StoryObj<MenuItemProps> = {}