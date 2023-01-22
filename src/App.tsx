import { FooterPage } from './Components/Footer'
import { HeaderPage } from './Components/Header'
import { List } from './Components/ListCards'
import GlobalStyle from './styles/style'

function App() {

  return (
    <div className="App">
      <HeaderPage />
      <List />
      <FooterPage />
      <GlobalStyle />
    </div>
  )
}

export default App
