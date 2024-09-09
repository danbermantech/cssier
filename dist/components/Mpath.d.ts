import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Mpath(
  props: ComponentProps<'mpath'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
