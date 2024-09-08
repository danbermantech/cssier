import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Address(
  props: ComponentProps<'address'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
