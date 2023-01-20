import { BrowserRouter , Routes , Route } from "react-router-dom";
import Landing from "../../pages/Landing";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Home from "../../pages/Home";
import NotFount from "../../pages/NotFund";
import Flexbox from "../../pages/Flexbox";
const App = () => {
    return ( 
        <BrowserRouter>
          <Routes>
            <Route path="/Landing" element={<Landing></Landing>}></Route>
            <Route path="/Login" element={<Login></Login>}></Route>
            <Route path="/Register" element={<Register></Register>}></Route>
            <Route path="/Home" element={<Home></Home>}></Route>
            <Route path="/*" element={<NotFount></NotFount>}></Route>
            <Route path="/Flexbox" element={<Flexbox></Flexbox>}></Route>
          </Routes>
        </BrowserRouter>
     );
}

export default App;