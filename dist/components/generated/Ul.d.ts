import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Ul(
  props: ComponentProps<'ul'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
