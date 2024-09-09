import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Td(
  props: ComponentProps<'td'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
