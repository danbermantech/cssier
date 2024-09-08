import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function FeImage(
  props: ComponentProps<'feImage'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
