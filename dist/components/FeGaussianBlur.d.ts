import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function FeGaussianBlur(
  props: ComponentProps<'feGaussianBlur'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
