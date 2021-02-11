import { Normalize } from './normalize'
import CustomGlobalStyle from './global'

export default function GlobalStyle(): JSX.Element {
  return (
    <>
      <Normalize />
      <CustomGlobalStyle />
    </>
  )
}
