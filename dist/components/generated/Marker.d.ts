import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Marker(
  props: ComponentProps<'marker'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
