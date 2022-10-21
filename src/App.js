import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FormInput from './Components/FormInput';
import DisplayPage from './Pages/DisplayPage';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormInput />} />
        <Route path="/displaypage" element={<DisplayPage />} />
        <Route path="*" element={<h2>404 - Page not found!!!</h2>} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
