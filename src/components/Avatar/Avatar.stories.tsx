import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '.'
import Profile from '../../../public/profile.png'


export default {
	title: 'Components/Avatar',
	component: Avatar,
	args: {
        src: `${Profile}`,
		size: 'md',
		alt: 'Biscuit Profile Image' // Criar um objeto?
	},
	argTypes: {
		size: {
            options: ['md', 'sm'],
			control: {
				type: 'inline-radio'
			}
        }
	}
} as Meta<AvatarProps>

export const Default: StoryObj<AvatarProps> = {}