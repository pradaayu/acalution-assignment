// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/routes';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
