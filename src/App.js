
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Checkbox from './Components/Checkbox/Checkbox';
import EvenCard from './Components/Eventcard/EvenCard';
import Events from './Components/Events/Events';
import PrivateRoutes from './Components/Helper/Helper';
import Homepage from './Components/Homepage/Homepage';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Search from './Components/Search/Search';
import Login from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import UserCard from './Components/UserCard/UserCard';
import UserProfile from './Components/UserProfile/UserProfile';
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
          {/* <EvenCard/> */}
          
          <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/home' element={<Homepage/>} />
            <Route path='/check' element={<Checkbox/>} />
            {/* <Route path='/users' element={<h1>Users</h1>} /> */}

            <Route element={<PrivateRoutes/>}>
            <Route path='/events' element={<Events/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/profile/:id' element={<UserProfile/>} />
            <Route path='/search' element={<Search/>} />
            
            
          </Route>
           


          </Routes>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
