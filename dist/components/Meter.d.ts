import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Meter(
  props: ComponentProps<'meter'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
