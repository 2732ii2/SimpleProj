import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom";
import MybookSelf from './Component/MyBookSelf/MybookSelf';
import Home from './Component/Home/Home';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route  path='/' element={<Home />}/>
      <Route  path='/save' element={<MybookSelf />}/>
     </Routes>
    </div>
  );
}

export default App;
