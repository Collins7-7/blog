
import Navbar from './Navbar';
import Home from "./Home";

//const title = 'Welcome to the new blog';
//const person = { name: 'Collins', age: '25'}

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>

      </div>
    </div>
  );
}

export default App;
