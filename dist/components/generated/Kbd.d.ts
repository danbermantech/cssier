import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Kbd(
  props: ComponentProps<'kbd'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
