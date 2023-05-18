import Login from './components/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Odashboard from './Odashboard';
import Dashboard from './Dashboard';
import Bdashboard from './Bdashboard';
const App = () => {
  return (
    <div >
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/offers" element={<Odashboard/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/balance" element={<Bdashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;