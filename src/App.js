import './App.css';
import NavBar from './Components/NavBar';
import img from './Logo/logo-no-background.svg'
import AllRoutes from './Components/Routes/AllRoutes';


function App() {
  return (
    <div  className="App">
      <NavBar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
