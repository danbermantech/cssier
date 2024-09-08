import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Img(
  props: ComponentProps<'img'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
