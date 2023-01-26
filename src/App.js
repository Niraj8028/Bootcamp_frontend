
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Signin/Signin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<h1>Signup</h1>} />


          </Routes>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
