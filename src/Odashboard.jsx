import { Navbar,Welcome,Footer, Offers } from './components';
const Odashboard = () => {
  return (
    <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar/>
      <Welcome/> 
    </div>
    <Offers/>
      <Footer/>
    </div>
  )
}

export default Odashboard;
