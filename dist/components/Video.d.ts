import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Video(
  props: ComponentProps<'video'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
