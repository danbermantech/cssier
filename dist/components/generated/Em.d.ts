import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Em(
  props: ComponentProps<'em'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
