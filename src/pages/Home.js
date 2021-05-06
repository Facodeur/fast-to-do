import Titre from '../components/Titre'
import SignIn from '../components/SignIn'
import styled from 'styled-components'


const Home = ({ className }) => {
  return (
    <div className={className}>
      <Titre />
      <SignIn />
    </div>
  )
}

export default styled(Home)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
`
