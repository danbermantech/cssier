import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Var(
  props: ComponentProps<'var'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
