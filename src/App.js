import React from 'react';
import './App.scss';
import { Routes, Route } from "react-router-dom";

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <>
    <Header />
    <Sidebar />
    <main className='content-wrapper content-expand'>
      <div className="container-xl">
        <div className="container-wrap">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
        </div>
      </div>
    </main>
    </>
  );
}

export default App;
