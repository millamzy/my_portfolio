import './App.css';

import Main from './component/Main';
import { Navbar } from './component/Navbar';
import Home from './component/pages/Home';
import footer from './component/pages/footer';

function App() {
  return (
    <div className='full'>
    <Navbar/>
    <Home/>
    <footer/>
    
    
    </div>
  );
}

export default App;
