import styled from 'styled-components'
import BtnLoging from './BtnLoging'
import { pxToRem, colors } from '../theme/helpers'


const SignIn = ({ className }) => {

  const handleClick = () => {
    console.log("j'ai click !")
  }
  return (
    <div className={className}>
      <p>Sign in with</p>
      <BtnLoging btnColor={colors.primary} click={handleClick}>Google</BtnLoging>
      <BtnLoging btnColor={colors.facebook}>Facebook</BtnLoging>
      <BtnLoging btnColor={colors.grey}>Github</BtnLoging>
    </div>
  )
}

export default styled(SignIn)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`
