import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Img(
  props: ComponentProps<'img'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
