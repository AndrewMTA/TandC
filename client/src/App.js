
import{BrowserRouter, Routes, Route} from "react-router-dom"
import CarInfo from "./components/pages/CarInfo"
import Navbar from "./components/NavBar2";
import Login from "./components/pages/Login"
import List from "./components/pages/List"
import Signup from "./components/pages/Signup"
import Filter from "./components/pages/HomePage"
import Listings from "./components/pages/myListings"
import Upload from "./components/pages/UploadPic"
function App() {
  return (


    <>

<BrowserRouter>
<Routes>
  <Route path="/" element={<Filter/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/list/:userId" element={<List/>}/>
  <Route path="/listings/:userId" element={<Listings/>}/>
  <Route path="/upload" element={<Upload/>}/>
  <Route path={`/cars/:carID`} element={<CarInfo/>}/>
</Routes>

</BrowserRouter>
 

    </>
  );
}

export default App;
