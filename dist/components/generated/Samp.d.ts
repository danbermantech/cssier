import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Samp(
  props: ComponentProps<'samp'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
