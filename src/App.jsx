import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home';
import Experience from './components/Experience';

function App() {

  // const location = useLocation()

  return (
    <BrowserRouter location={location}>
      <Header />
      <Routes >
        <Route path='*' element={<Home />}/>
        <Route path='/experience' element={<Experience />}/>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
