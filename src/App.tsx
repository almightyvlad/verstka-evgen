import './App.css'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'
import { Main } from './main/Main'

function App() {
  return (
    <div className='container'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App;
