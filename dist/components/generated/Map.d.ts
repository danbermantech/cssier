import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Map(
  props: ComponentProps<'map'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
