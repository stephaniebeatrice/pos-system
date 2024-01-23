import React, { useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './custom.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Products from './components/Products'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <Router>
        <div>
          {/* The common parent container */}
          <Switch>
            <Route path="/products" component={Products} />
            {/* Add more routes for other components */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App
