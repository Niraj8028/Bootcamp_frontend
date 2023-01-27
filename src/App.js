
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Events from './Components/Events/Events';
import Homepage from './Components/Homepage/Homepage';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Login from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import UserCard from './Components/UserCard/UserCard';
import Users from './Components/Users/Users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar />
          {/* <UserCard/> */}
          {/* <Homepage/> */}
          {/* <Events/> */}
          {/* <Users/> */}
          <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/home' element={<Homepage/>} />
            {/* <Route path='/users' element={<h1>Users</h1>} /> */}
            <Route path='/events' element={<Events/>} />
            <Route path='/profile' element={<Profile/>} />


          </Routes>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
