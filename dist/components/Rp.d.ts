import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Rp(
  props: ComponentProps<'rp'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
