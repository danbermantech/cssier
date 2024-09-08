import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Abbr(
  props: ComponentProps<'abbr'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
