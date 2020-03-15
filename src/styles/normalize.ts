import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const Normalize = createGlobalStyle`
  ${normalize}
 
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`
