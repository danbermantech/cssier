import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Aside(
  props: ComponentProps<'aside'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
