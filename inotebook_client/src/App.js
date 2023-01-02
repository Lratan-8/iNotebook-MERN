import './App.css';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";
import ResponsiveAppBar from './components/Navbar';
import About from './pages/About';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SignUp from './pages/Signup';
import { useContext,useEffect } from 'react';
import noteContext from './context/notes/noteContext';

function App() {

  const context = useContext(noteContext);
  const{mode} = context;

  const darkTheme = createTheme({
    palette: {
      mode: `${mode}`,
    },
  });

  return (



    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/signup' element={<SignUp />} />
        </Routes>
      </div>
    </ThemeProvider>


  );
}

export default App;
