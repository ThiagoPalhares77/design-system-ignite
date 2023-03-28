import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@thiagopalhares-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/thiagopalhares77.png',
    alt: 'Thiago Palhares',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const CustomTag: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
