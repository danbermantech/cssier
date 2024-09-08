import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Thead(
  props: ComponentProps<'thead'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
