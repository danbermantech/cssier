import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Output(
  props: ComponentProps<'output'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
