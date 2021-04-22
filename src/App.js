// import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/routes'
import {ModalProvider} from './components/compability/modal.provider'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Routes/>
      </ModalProvider>
    </BrowserRouter>
  )
}

export default App;
