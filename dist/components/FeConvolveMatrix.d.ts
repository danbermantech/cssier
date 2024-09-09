import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function FeConvolveMatrix(
  props: ComponentProps<'feConvolveMatrix'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
