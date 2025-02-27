
import './App.css';
import Home from "./pages/Home"
import Header from "./components/Header"
import { BrowserRouter, Route, Routes,  } from "react-router-dom"

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Header />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
