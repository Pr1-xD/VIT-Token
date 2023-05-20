import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Odashboard from './Odashboard';
import Dashboard from './Dashboard';
import Bdashboard from './Bdashboard';
import MerchantLogin from './components/MerchantLogin';
import Login from './components/Login';
import MerchantSignup from './components/MerchantSignup';
import Signup from './components/Signup';
import Pay from './components/Pay';
import Transfer from './components/Transfer';
import Onboarding from './components/Onboarding';
import Home from "./components/Home";
import AddBalance from "./components/AddBalance";
const App = () => {
  return (
    <div >
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/merchantlogin" element={<MerchantLogin/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/merchantsignup" element={<MerchantSignup/>} />
            <Route path="/pay" element={<Pay/>} />
            <Route path="/offers" element={<Odashboard/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/transfer" element={<Transfer/>} />
            <Route path="/onboarding" element={<Onboarding/>} />
            <Route path="/balance" element={<Bdashboard/>} />
            <Route path="/addbalance" element={<AddBalance/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
