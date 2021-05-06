import styled from 'styled-components'
import { pxToRem, colors } from '../theme/helpers'

const BtnLoging = ({className, children, click}) => {
  return (
    <button className={className} onClick={click}>
      {children}
    </button>
  )
}

export default styled(BtnLoging)`
  display: flex;
  align-items: center;
  background: ${props => props.btnColor};
  color: ${colors.white};
  margin: ${pxToRem(10)};
  border-radius: 4px;
  min-width: ${pxToRem(200)};
  cursor: pointer;
  transition: 200ms;
  &:hover {
    opacity: 0.8;
  }
`
