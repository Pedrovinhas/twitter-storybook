import { Meta, StoryObj } from '@storybook/react'
import { UserProfile, UserProfileProps } from '.'
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
	title: 'components/UserProfile',
	component: UserProfile,
	args: {
       
	},
	decorators: [withRouter],
	argTypes: {
		
	}
} as Meta<UserProfileProps>

export const Default: StoryObj<UserProfileProps> = {}