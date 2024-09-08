import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Hgroup(
  props: ComponentProps<'hgroup'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
