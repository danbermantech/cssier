import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Hgroup(
  props: ComponentProps<'hgroup'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
