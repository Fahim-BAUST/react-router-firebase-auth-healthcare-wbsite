
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Appoint from './Pages/Appoint/Appoint';
import Doctors from './Pages/Doctors/Doctors';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import Ourteam from './Pages/Ourteam/Ourteam';
import ServiceDetails from './Pages/Services/ServiceDetails/ServiceDetails';
import Services from './Pages/Services/Services';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>

          </Route>
          <Route path="/home">
            <Home></Home>

          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>

          <Route path="/doctors">
            <Doctors></Doctors>

          </Route>
          <Route path="/team">
            <Ourteam></Ourteam>
          </Route>
          <PrivateRoute path="/details/:detailsID">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <PrivateRoute path="/doctor/:dID">
            <Appoint></Appoint>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
