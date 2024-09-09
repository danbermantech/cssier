import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Th(
  props: ComponentProps<'th'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
