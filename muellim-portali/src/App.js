import  FormInfo  from "./components/RegisterPage/FormInfo";
import "../src/assets/css/register/style.css";
import "../src/assets/css/login/style.css";
import Portal from "./components/PortalPage/Portal";
import Login from "./components/LoginPage/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/"></Link>
        <Link to="/forminfo"></Link>
        <Link to="/login"></Link>
        
        <Routes>
            <Route exact path='/' element={< Portal />}></Route>
            <Route exact path='/forminfo' element={< FormInfo />}></Route>
            <Route exact path='/login' element={< Login />}></Route>
        </Routes>
      </div>
 </Router>
  );
}

export default App;
