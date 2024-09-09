import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function LinearGradient(
  props: ComponentProps<'linearGradient'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
