import Stars from "./components/Stars.jsx";
import { HashRouter, Routes, Route } from "react-router";
import { useStat, useEffect } from "react";
import HomePage from "./pages/HomePage.jsx";

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