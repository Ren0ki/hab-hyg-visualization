import { HashRouter, Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage.jsx";
import GlossaryPage from "./pages/GlossaryPage.jsx";
import RefsPage from "./pages/RefsPage.jsx";

function App() {
  //return <Stars />;
  return( 
<HashRouter>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/glossary" element={<GlossaryPage/>}/>
    <Route path="/refs" element={<RefsPage/>}/>
  </Routes>
</HashRouter>
  )
}

export default App;