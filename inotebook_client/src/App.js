import './App.css';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";
import ResponsiveAppBar from './components/Navbar';
import About from './pages/About';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SignUp from './pages/Signup';
import { useContext, useState } from 'react';
import noteContext from './context/notes/noteContext';
import Login from './pages/Login';
import { ThemeContext } from '@emotion/react';
import themeContext from './context/themes/themeContext';

function App() {

  //handling dark and light mode theme
  const context = useContext(themeContext);
  const{mode} = context;

  const darkTheme = createTheme({
    palette: {
      mode: `${mode}`,
    },
  });

  //handling logged in
  const [loggedIn, setloggedIn] = useState(false);

  const handleLoggedIn = () =>{

  }



  

  return (


    
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <div className="App">
        <Routes>
          {
            (loggedIn) && <Route exact path='/' element={<Home />} />
          }
          {
            (!loggedIn) && 
            <Route exact path='/' element={<Login/>} />
          }
          
          <Route exact path='/about' element={<About />} />
          <Route exact path='/signup' element={<SignUp />} />
        </Routes>
      </div>
    </ThemeProvider>


  );
}

export default App;
