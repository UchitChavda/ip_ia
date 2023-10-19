import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Login from "./Components/Login";
import Navbar from './Components/navbar';
import ContactForm from './Components/contactus';
import Profile from './Components/profile';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
 import Registration from './Components/registration';


function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
      <Routes>
        <Route exact path="/login" Component={Login}/>
        <Route exact path="/signin" Component={Registration}/> 
        <Route exact path="/Contactus" Component={ContactForm}/>
        <Route exact path="/profile" Component={Profile}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
