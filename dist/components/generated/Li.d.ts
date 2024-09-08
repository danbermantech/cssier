import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Li(
  props: ComponentProps<'li'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
