import { Meta, StoryObj } from '@storybook/react'
import { Icon, IconProps } from  './Icon';
import { House, TwitterLogo } from 'phosphor-react';

export default {
    title: 'Components/Icon',
    component: Icon,
    args: {
        children: (
            <TwitterLogo weight='fill'/>
           
            
        ),
    },
    argTypes: {}
} as Meta<IconProps>

export const Default: StoryObj<IconProps> = {
    argTypes: {
		children: {
			table: {
				disable: true,
			}
		},
        selected: {
            table: {
				disable: true,
			}
        }
        
    }
}

export const Home: StoryObj<IconProps> = {
    args: {
        children: (
            <House weight='regular'/>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
       
    }
}
