import { useState } from 'react'
import styled from 'styled-components';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header'
import Main from './components/shared/Main';
import MobileNavMenu from './components/shared/navigation/MobileNavMenu';
import { GlobalStyle } from './GlobalStyle'

function App() {

  const [navMenuActive, setNavMenuActive] = useState(false)

  return (
    <AppContainer className="App">
      <GlobalStyle />
      <Header
        navMenuActive={navMenuActive}
        setNavMenuActive={setNavMenuActive}
      />
      <MobileNavMenu navMenuActive={navMenuActive} setNavMenuActive={setNavMenuActive} />
      <Main />
      <Footer />
    </AppContainer>
  );
}

/*___Styling___*/

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
`

export default App;
