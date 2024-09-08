import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Audio(
  props: ComponentProps<'audio'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
