// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginUser from "./assets/LoginUser";
import SignUp from "./assets/SignUp"; // import SignUp component
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginUser />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
