import './App.css';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";
import ResponsiveAppBar from './components/Navbar';
import About from './pages/About';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <NoteState>
      <div className="App">
        <ResponsiveAppBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='about' element={<About />} />
        </Routes>
      </div>
    </NoteState>
  );
}

export default App;
