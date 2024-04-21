import logo from './logo.svg';
import './App.css';
import Signin from './Signin';
import Signup from './Signup'
import Admin from './Admin'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
<Routes>
  <Route path="/" element={<Signin/>} />
  <Route path="/admin" element={<Admin/>}/>
  <Route path="/signup" element={<Signup/>}/>
</Routes>
</BrowserRouter>
{/* <Signin/>  */}
{/* <Signup/> */}
{/* <Admin/> */}
    </div>
  );
}

export default App;
