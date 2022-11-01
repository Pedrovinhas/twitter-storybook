import { Meta, StoryObj } from '@storybook/react'
import { TextArea, TextAreaRootProps } from  './TextArea';
import { MagnifyingGlass } from 'phosphor-react';

export default {
    title: 'Components/TextArea',
    component: TextArea.Root,
    args: {
        children: [
            <TextArea.Input placeholder='What`s happening?' maxLength={380} />
           
        ],
    },
    argTypes: {}
} as Meta<TextAreaRootProps>

export const Default: StoryObj<TextAreaRootProps> = {}

