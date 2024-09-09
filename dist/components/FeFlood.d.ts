import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function FeFlood(
  props: ComponentProps<'feFlood'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
