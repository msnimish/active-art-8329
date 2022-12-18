import './App.css';

// import Footer from './Components/Nimish/Footer/Footer';
import Navbar from './Components/Nimish/Navbar/Navbar';

import AllRoutes from './Routes/AllRoutes';
import Basket from './Pages/Basket';
import Footer from './Components/Nimish/Footer/Footer';
import Loading from './Components/Rohit/Loading';





function App() {
  return (
    <div className="App">
{/* <Navbar/> */}
     <AllRoutes/>
     <Basket/>
     {/* <Navbar/> */}
   
  
      
{/* <Footer/> */}
    </div>
  );
}

export default App;
