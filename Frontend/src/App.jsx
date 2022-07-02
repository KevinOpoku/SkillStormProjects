import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeContext, {themes} from './components/contexts/ThemeContext';
import {CreateFlight} from './components/Form';
import { CFlights} from './pages/CreateFlight';
import { DisplayFlights } from './pages/DisplayFlight';
import {UFlights} from './pages/UpdateFlight';
import { Error } from './pages/Error';
import { AppNav } from './components/features/AppNav';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // Whatever is returned from these functions will be what is rendered

  const [currTheme, setCurrTheme] = useState(themes.light);

  const toggleTheme = () => {
      if (currTheme === themes.light) {
          setCurrTheme(themes.dark);
      } else {
          setCurrTheme(themes.light);
      }
  }

  return (
      // This wraps all of its children in the context, all children can read from it
      <ThemeContext.Provider value={currTheme}>
          {/* Everything in here is going to managed by react-router-dom so that it can toggle between pages */}
          <BrowserRouter>
              <AppNav />
              
              <Routes>
                  {/* When the URL in the browser becomes /, toggle on the Landing page */}
                  <Route path="/" element= "" />
                  <Route path="/Createflights" element={<CFlights />} />
                  <Route path="/Displayflights" element={<DisplayFlights />} />
                  <Route path='/Updateflights' element={<UFlights />} />
                  <Route path="*" element={<Error />} />
                  
              </Routes>
          </BrowserRouter>
      </ThemeContext.Provider>
  );   
}

export default App;
