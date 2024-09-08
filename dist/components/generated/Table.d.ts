import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Table(
  props: ComponentProps<'table'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
