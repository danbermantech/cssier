import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function FeColorMatrix(
  props: ComponentProps<'feColorMatrix'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
