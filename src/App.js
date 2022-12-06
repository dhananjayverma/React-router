import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import {Routes,Route} from "react-router-dom";
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path={"/"} element={<Home/>}></Route>
      <Route path={"/about"} element={<About/>}></Route>
      <Route path={"/product/:id"} element={<Product/>}></Route>
    </Routes>
     
    </div>
  );
}

export default App;
