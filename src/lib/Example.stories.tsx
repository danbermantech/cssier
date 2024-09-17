import { Meta, StoryObj } from '@storybook/react'
import { useStylesheet } from './hooks'
import React from 'react'
import { PseudoCss } from './types'

const Example = ({ pseudo }: { pseudo: PseudoCss }) => {
  const [pseudoId] = useStylesheet(pseudo)
  return (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <div className={pseudoId}>Hover over Me</div>
      <div className={pseudoId}>Hover over Me</div>
      <div className={pseudoId}>Hover over Me</div>
    </div>
  )
}

const meta: Meta<typeof Example> = {
  component: Example,
  argTypes: {
    pseudo: { control: { type: 'object' } },
  },
}

export default meta
type Story = StoryObj<typeof Example>

export const Primary: Story = {
  name: 'Main/Example',
  args: {
    pseudo: {
      neutral: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexFlow: 'column',
        width: '24rem',
        fontSize: '2rem',
        background: '#88888811',
        borderRadius: '8px',
      },
      hover: {
        background: '#8888cc22',
        and: {
          after: {
            width: '100%',
          },
        },
      },
      after: {
        content: "''",
        display: 'block',
        width: '12px',
        height: '8px',
        position: 'relative',
        borderRadius: '4px',
        bottom: '2px',
        left: 0,
        background: 'black',
        zIndex: -1,
        transition: 'all 0.5s ease-in-out',
      },
    },
  },
  tags: ['autodocs'],
}
