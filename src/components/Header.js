import styled from 'styled-components'
import { pxToRem } from '../theme/helpers'




const Header = ({ className }) => {
  return (
    <header className={className}>
      <h1>Fast To Do</h1>
    </header>
  )
}

export default styled(Header)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid white;
  
  h1 {
    font-size: ${pxToRem(60)};
    font-family: 'Faster One', cursive;
    margin: 20px;
  }
  
`
