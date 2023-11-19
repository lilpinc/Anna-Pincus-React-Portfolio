
// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import './App.css'

function App() {

  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div>
      <Nav />
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        Made by Anna Britta Pincus 
      </footer>
    </div>
  );
}

export default App;