import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Kbd(
  props: ComponentProps<'kbd'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
