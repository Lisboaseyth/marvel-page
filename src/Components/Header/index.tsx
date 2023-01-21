import { SearchNormal1 } from 'iconsax-react'
import Logo from '../../assets/marvelLogo.webp'
import { HeaderPageStyled } from './style'

export const HeaderPage = () => {
  return (
    <HeaderPageStyled>
        <img src={Logo} alt="logoHeader" />
        <div className='divAlign'>
            <input type="text" placeholder='Pesquise seu quadrinho' /> <SearchNormal1 className='icon' size="20" color="#e90000"/>
        </div>
    </HeaderPageStyled>
  )
}
