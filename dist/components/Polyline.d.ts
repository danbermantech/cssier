import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Polyline(
  props: ComponentProps<'polyline'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
