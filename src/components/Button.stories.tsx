import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
	title: 'Components/Button',
	component: Button,
	args: {
		children: 'Tweet',
        variant: 'primary'
	},
	argTypes: {
        
    }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
 
    argTypes: {
        size: {
            options: ['big', 'medium'],
			control: {
				type: 'inline-radio'
			}
        },
        variant: {
			table: {
				disable: true,
			}
		}
    }
}

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        variant: 'secondary'
    },
    argTypes: {
        size: {
            options: ['medium', 'small'],
			control: {
				type: 'inline-radio'
			}
        },
        variant: {
			table: {
				disable: true,
			}
		}
    }
}
