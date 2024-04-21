import { BrowserRouter, Routes ,Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import RegisterPage from "./components/RegisterPage/RegisterPage.jsx";


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
          </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
