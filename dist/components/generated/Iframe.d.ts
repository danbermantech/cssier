import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Iframe(
  props: ComponentProps<'iframe'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
