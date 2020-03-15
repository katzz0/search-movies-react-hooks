import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    
    > * {
      height: 100%;
    }
  }
`
