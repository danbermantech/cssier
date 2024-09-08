import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Embed(
  props: ComponentProps<'embed'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
