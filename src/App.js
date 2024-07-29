import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './pages/sign_in/components/register/registration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<Registration />}/>
      </Routes>
    </Router>
  );
}

export default App;
