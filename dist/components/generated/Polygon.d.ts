import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Polygon(
  props: ComponentProps<'polygon'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
