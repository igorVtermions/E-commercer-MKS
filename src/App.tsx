import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Home } from "./components/Home/Home"
import { GlobalStyle } from "./global/globalStyle"

export function App() {
 

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </div>
  )
}




