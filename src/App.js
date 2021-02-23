import * as React from "react";
import Navbar from './Navbar'
import Submenu from './Submenu';
import Sidebar from './Sidebar';
import Hero from './Hero'

function App() {
  return (
    <>
      <Navbar/>
      <Sidebar/>
      <Hero/>
      <Submenu/>
    </>
  )
}

export default App;
