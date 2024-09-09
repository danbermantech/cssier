import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Map(
  props: ComponentProps<'map'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
