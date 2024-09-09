import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Audio(
  props: ComponentProps<'audio'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
