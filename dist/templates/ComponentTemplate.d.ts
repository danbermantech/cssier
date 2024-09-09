import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function COMPONENT_NAME(
  props: ComponentProps<'TAG'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
