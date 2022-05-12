import './App.css';
import React, { useEffect, useState } from 'react';

// import GamePage from './Pages/GamePage';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import { Button, Typography } from '@mui/material';
import { auth } from './components/firebase/firebase'; 
// import { auth0 } from './components/firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const Context = React.createContext()



function App() {

  const [auth1, setAuth1] = useState(!!auth.currentUser)
  const [user, setUser] = useState({})

  onAuthStateChanged(auth, (user) => {
    setAuth1(!!user)
    setUser(user)
  })

  return (
    <Context.Provider value={user}>
      <BrowserRouter>
        {/* <Button onClick={() => ff()}>hh</Button> */}
        {/* <Button onClick={() => console.log()}>00</Button> */}
      <AppRouter />
            {!auth1 
              ?
              <div>не в сети</div>
              : 
              <div>в сети</div>
            }
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
