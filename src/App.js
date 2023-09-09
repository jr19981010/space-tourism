import React from 'react';
import Index from './pages/Index';
import DisplayProvider from './DisplayContext';
// import './App.css';



function App() {

  return (
    <>
    <DisplayProvider>
    <Index />
    </DisplayProvider>
    </>
  );
}


export default App;