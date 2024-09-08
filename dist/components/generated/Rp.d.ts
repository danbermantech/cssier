import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Rp(
  props: ComponentProps<'rp'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
