import { BrowserRouter, Routes, Route } from "react-router-dom";
import Manager from "./components/Manager/Manager"
import Home from "./components/Home";
function App() {
  return (
    
       <BrowserRouter> 
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route path='manager' element={<Manager />}/>
        </Routes> 
       </BrowserRouter>   
  );
}

export default App;
