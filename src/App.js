import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
import Login from './login';
import Register from './register';
import Nav from './nav';
import Adminlogin from './adminlogin';
import Adminregister from './adminregister';
import Addmovies from './addmovies';
import Movies from './movies';
import Usermovies from './usermovies';
import Cart from './cart';
import Usertickets from './usertickets';
import Adminticket from './admintickets';
function App() {
  return (
    <>
     <Router>
        <Nav></Nav>
        <div className="container">
          <Switch>
            <Route path="/login" component={Login} exact />
            <Route path="/adminlogin" component={Adminlogin} exact />
            <Route path="/adminregister" component={Adminregister} exact />
            <Route path="/addmovies" component={Addmovies} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/movies" component={Movies} exact />
            <Route path="/usermovies/:id" component={Usermovies} exact />
            <Route path="/cart/:id" component={Cart} exact />
            <Route path="/usertickets/:id" component={Usertickets} exact />
            <Route path="/admintickets" component={Adminticket} exact />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
