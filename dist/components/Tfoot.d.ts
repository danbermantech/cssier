import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Tfoot(
  props: ComponentProps<'tfoot'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
