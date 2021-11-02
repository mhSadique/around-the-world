import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';
import ManageAllOrders from './pages/ManageAllOrders';
import MyOrders from './pages/MyOrders';
import PlaceOrder from './pages/PlaceOrder';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AddNewTouristSpot from './pages/AddNewTouristSpot';
import Login from './pages/Login';
import DataContext from './Contexts/PackageDataContext';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import UserInfoContext from './Contexts/UserInfoContext';

function App() {
  return (
    <>
      <Router>
        <UserInfoContext>
          <DataContext>
            <Navigation />

            <Switch>

              <Route exact path='/'>
                <Homepage />
              </Route>

              <PrivateRoute path='/my-orders'>
                <MyOrders />
              </PrivateRoute>

              <PrivateRoute path='/manage-orders'>
                <ManageAllOrders />
              </PrivateRoute>

              <PrivateRoute path='/place-order/:key'>
                <PlaceOrder />
              </PrivateRoute>

              <PrivateRoute path='/add-new-spot'>
                <AddNewTouristSpot />
              </PrivateRoute>

              <Route path='/login'>
                <Login />
              </Route>

            </Switch>
          </DataContext>
        </UserInfoContext>
      </Router>
      <Footer />
    </>
  );
}

export default App;
