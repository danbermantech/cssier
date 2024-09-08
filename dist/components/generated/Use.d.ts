import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Use(
  props: ComponentProps<'use'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
