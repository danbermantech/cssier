import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Svg(
  props: ComponentProps<'svg'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
