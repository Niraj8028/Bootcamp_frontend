
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import UserCard from './Components/UserCard/UserCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar />
          {/* <UserCard/> */}
          <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />


          </Routes>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
