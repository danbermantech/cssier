import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Abbr(
  props: ComponentProps<'abbr'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
