//@ts-nocheck
import type { Meta, StoryObj } from '@storybook/react'
import COMPONENT_NAME from './COMPONENT_NAME'

const meta: Meta<typeof COMPONENT_NAME> = {
  component: COMPONENT_NAME,
}

export default meta
type Story = StoryObj<typeof COMPONENT_NAME>

export const Primary: Story = {
  name: 'COMPONENT_NAME',
  args: {
    pseudo: {
      neutral: {
        fontFamily: 'sans-serif',
        background: '#23242588',
        borderRadius: '8px',
        padding: '8px',
        width: 'max-content',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      hover: {
        background: '#232425aa',
      },
      before: {
        content: "'🦜'",
        fontSize: '1.5rem',
        display: 'inline-block',
      },
      after: {
        content: "'🎇'",
        fontSize: '1.5rem',
        display: 'inline-block',
      },
      focus: {},
      active: {},
      visited: {},
      link: {},
      disabled: {},
      enabled: {},
    },
    children: 'Please enjoy this example of the "COMPONENT_NAME" component',
  },
  tags: ['autodocs'],
}
