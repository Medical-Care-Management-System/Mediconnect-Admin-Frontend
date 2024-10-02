import React from 'react';
// import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Mainview from './Mainview';
// import Login from './Login';
// import Main from './Main';
// import { SignIn } from '@clerk/clerk-react';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="login" element={<SignIn/>} />
    //     {/* <Route path="/main" element={<Main />} />
    //     <Route path="*" element={<Navigate to="/" />} /> */}
    //   </Routes>
    // </Router>
    <div>
      <Mainview/>
    </div>
  );
}

export default App;
