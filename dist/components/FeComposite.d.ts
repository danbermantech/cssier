import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function FeComposite(
  props: ComponentProps<'feComposite'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
