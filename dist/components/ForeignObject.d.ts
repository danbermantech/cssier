import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function ForeignObject(
  props: ComponentProps<'foreignObject'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
