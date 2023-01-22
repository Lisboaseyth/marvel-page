import Logo from '../../assets/marvelLogo.webp'
import { HeaderPageStyled } from './style'

export const HeaderPage = () => {

  return (
    <HeaderPageStyled>
        <a className='aLogo' href="#">
           <img src={Logo} alt="logoHeader" />
        </a>
    </HeaderPageStyled>
  )
}
