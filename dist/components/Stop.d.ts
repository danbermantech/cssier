import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Stop(
  props: ComponentProps<'stop'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
