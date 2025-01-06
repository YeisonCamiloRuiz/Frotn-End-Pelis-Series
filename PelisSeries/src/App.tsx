import './styles/App.css'
import './styles/variables.css'
import Header from './components/layout/Header'
import IndexRouter from './routes/index.router'
import Footer from './components/layout/Footer'

function App() {

  return (
    <>
      <Header/>
      <IndexRouter/>
      <Footer/>
    </>
  )
}

export default App