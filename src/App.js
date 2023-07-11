import './App.css';
import {Routes, Route} from "react-router-dom";
import {LoginContainer} from "./components/login/LoginContainer";
import {FormLogin} from "./components/login/FormLogin";
import {HomeContainer} from "./components/HomeContainer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginContainer/>}/>
        <Route path="/login" element={<FormLogin/>}/>
        <Route path='/home' element={<HomeContainer/>}/>
    </Routes>
    </div>
  );
}

export default App;
