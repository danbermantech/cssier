import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Br(
  props: ComponentProps<'br'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
