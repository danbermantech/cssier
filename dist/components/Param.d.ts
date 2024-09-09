import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Param(
  props: ComponentProps<'param'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
