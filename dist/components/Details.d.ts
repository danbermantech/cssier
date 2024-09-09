import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Details(
  props: ComponentProps<'details'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
