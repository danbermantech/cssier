import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function ForeignObject(
  props: ComponentProps<'foreignObject'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
