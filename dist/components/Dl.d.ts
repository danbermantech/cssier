import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Dl(
  props: ComponentProps<'dl'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
