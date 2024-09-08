import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function FeGaussianBlur(
  props: ComponentProps<'feGaussianBlur'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
