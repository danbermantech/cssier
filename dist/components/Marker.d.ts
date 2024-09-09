import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Marker(
  props: ComponentProps<'marker'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
