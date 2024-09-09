import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function TextPath(
  props: ComponentProps<'textPath'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
