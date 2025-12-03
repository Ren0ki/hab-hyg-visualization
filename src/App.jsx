import { HashRouter, Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage.jsx";
import Stars from "./components/Stars.jsx";
import Table from "./components/Table.jsx";

function App() {
  //return <Stars />;
  return( 
<HashRouter>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
  </Routes>
</HashRouter>
  )
}

export default App;