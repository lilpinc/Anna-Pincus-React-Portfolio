
// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/Navigation/NavTabs';
import './App.css'
import Footer from './components/ Footer/Footer';




function App() {

  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      </div>
  );
}

export default App;