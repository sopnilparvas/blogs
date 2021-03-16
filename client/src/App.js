import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Pages from "./pages/Pages";
import { DataProvider } from "./GlobalState";

function App() {
  return (
    <DataProvider>
      <Router>
        <Navbar />
        <main className='container my-4'>
          <Pages />
        </main>
      </Router>
    </DataProvider>
  );
}

export default App;
