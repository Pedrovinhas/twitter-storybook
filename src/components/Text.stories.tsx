import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
	title: 'Components/Text',
	component: Text,
	args: {
		children: 'Twitter UI'
	},
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
	args: {
		size: 'sm'
	}
}

export const Base: StoryObj<TextProps> = {
	args: {
		size: 'base'
	}
}

export const Large: StoryObj<TextProps> = {
	args: {
		size: 'lg'
	}
}