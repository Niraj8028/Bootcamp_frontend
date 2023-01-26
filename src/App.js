
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
          <h1>Learn React</h1>
          <Navbar/>
          <BrowserRouter>
          <Routes>
          <Route path='/login' element={<h1>Signin</h1>} />
            <Route path='/signup' element={<h1>Signup</h1>} />
            
           
          </Routes>
          </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
