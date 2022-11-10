import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '.'

export default {
	title: 'Components/Heading',
	component: Heading,
	args: {
		children: 'Twitter UI',
		size: 'lg'
	},
	argTypes: {
		size: {
			options: ['lg', 'xl', '2xl', '3xl'],
			control: {
				type: 'inline-radio'
			}
		}
	}
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Large: StoryObj<HeadingProps> = {
	args: {
		size: 'lg'
	}
}

export const ExtraLarge: StoryObj<HeadingProps> = {
	args: {
		size: 'xl'
	}
}

export const DoubleExtraLarge: StoryObj<HeadingProps> = {
	args: {
		size: '2xl'
	}
}

export const TripleExtraLarge: StoryObj<HeadingProps> = {
	args: {
		size: '3xl'
	}
}


export const CustomComponent: StoryObj<HeadingProps> = {
	args: {
		asChild: true,
		children: (
			<h1> Heading 1 </h1>
		)
	},
	argTypes: {
		children: {
			table: {
				disable: true,
			}
		},
		asChild: {
			table: {
				disable: true,
			}
		}
	},

}

