import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Fieldset(
  props: ComponentProps<'fieldset'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
