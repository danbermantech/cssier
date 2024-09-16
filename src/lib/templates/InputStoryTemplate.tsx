// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react'
import COMPONENT_NAME from './COMPONENT_NAME'
import { PseudoCss } from '../types'

const meta: Meta<typeof COMPONENT_NAME> = {
  component: COMPONENT_NAME,
  argTypes: {
    pseudo: {
      control: 'object',
      description: 'set of pseudo classes and elements',
    },
    type: {
      control: 'select',
      options: [
        'button',
        'checkbox',
        'number',
        'range',
        'text',
        'radio',
        'password',
        'date',
        'time',
        'datetime-local',
        'month',
        'week',
        'color',
        'email',
        'tel',
        'url',
        'search',
      ],
    },
  },
}

export default meta
type Story = StoryObj<typeof COMPONENT_NAME>

export const Primary: Story = {
  name: 'COMPONENT_NAME',
  args: {
    type: {},
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
        boxShadow: '0 0 8px 2px #232425',
      },
      hover: {
        background: '#232425aa',
      },
      focus: {
        border: '2px solid #232425',
      },
      active: {
        background: '#232425',
        color: '#fff',
      },
      visited: {},
      link: {},
      disabled: {},
      enabled: {},
    },
  },
}
