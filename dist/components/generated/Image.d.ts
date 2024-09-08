import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Image(
  props: ComponentProps<'image'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
