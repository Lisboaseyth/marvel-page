import { SearchNormal1 } from 'iconsax-react'
import Logo from '../../assets/marvelLogo.webp'
import { HeaderPageStyled } from './style'
import { Link, animateScroll as scroll } from "react-scroll";

export const HeaderPage = () => {

  return (
    <HeaderPageStyled>
        <a className='aLogo' href="#">
           <img src={Logo} alt="logoHeader" />
        </a>
    </HeaderPageStyled>
  )
}
