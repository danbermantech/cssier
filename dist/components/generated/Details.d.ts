import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Details(
  props: ComponentProps<'details'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
