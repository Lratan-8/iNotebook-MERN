import './App.css';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";
import ResponsiveAppBar from './components/Navbar';
import About from './pages/About';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SignUp from './pages/Signup';
import { useContext} from 'react';
import noteContext from './context/notes/noteContext';
import Login from './pages/Login';
import themeContext from './context/themes/themeContext';


function App() {

  //handling dark and light mode theme
  
  const tContext = useContext(themeContext);
  const nContext = useContext(noteContext);
  const jwt = nContext.authToken
  let authToken;
  if(localStorage.getItem('token')){
    authToken = localStorage.getItem('token');
  }else if(jwt){
    authToken = jwt;
  }
  
  const{mode} = tContext;
 

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
          {
            (authToken) && <Route exact path='/' element={<Home />} />
          }
          {
            (!authToken) && 
            <Route exact path='/login' element={<Login/>} />
          }
          
          <Route exact path='/about' element={<About />} />
          {(!authToken) &&
            <Route exact path='/signup' element={<SignUp />} />
          }
          {
            (authToken) &&
            <Route exact path='/signup' element={<Home/>} />
          }
          </Routes>
      </div>
    </ThemeProvider>


  );
}

export default App;
