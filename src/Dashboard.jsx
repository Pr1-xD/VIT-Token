import { Navbar,Welcome,Footer, Transactions } from './components';
const Dashboard = () => {
  return (
    <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar/>
      <Welcome/> 
    </div>
    <Transactions/>
      <Footer/>
    </div>
  )
}

export default Dashboard;
