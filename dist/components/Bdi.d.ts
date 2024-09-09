import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Bdi(
  props: ComponentProps<'bdi'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
