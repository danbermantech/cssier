import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Td(
  props: ComponentProps<'td'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
