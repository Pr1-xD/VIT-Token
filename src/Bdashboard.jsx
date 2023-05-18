import { Navbar,Welcome,Footer, Balance } from './components';
const Odashboard = () => {
  return (
    <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar/>
      <Welcome/> 
    </div>
    <Balance/>
      <Footer/>
    </div>
  )
}

export default Odashboard;
