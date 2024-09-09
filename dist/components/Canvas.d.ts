import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Canvas(
  props: ComponentProps<'canvas'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
