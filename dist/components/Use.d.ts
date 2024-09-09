import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Use(
  props: ComponentProps<'use'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
