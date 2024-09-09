import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Header(
  props: ComponentProps<'header'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
