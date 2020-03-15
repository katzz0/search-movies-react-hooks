import * as React from 'react'
import { Normalize } from './normalize'
import CustomGlobalStyle from './global'

export default function GlobalStyle() {
  return (
    <>
      <Normalize />
      <CustomGlobalStyle />
    </>
  )
}
