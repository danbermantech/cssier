import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Nav(
  props: ComponentProps<'nav'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
