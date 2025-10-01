import React, { use } from 'react';
import { Routes, Route, useNavigate, useLocation} from 'react-router-dom'
import './App.css'
import Background from './background';
import { AnimatePresence } from 'framer-motion';

import Homepage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillPage';
// import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  const myname = "あやっぴー";
  const navigate = useNavigate();
  const lcation = useLocation();


  const gotohome = () => {
    navigate('/');
  }

  const gotoabout = () => {
    navigate('/about');
  }

  const gotoskills = () => {
    navigate('/skills');
  }

  return (
    <>
      <Background />
      <header className="App-header">
        
        {/* <h1>私のポートフォリオ</h1>
        <p>ようこそ！私の自己紹介サイトへ</p> */}

        <nav className='Button-nav'>
          
          <button onClick={gotohome}>ホーム</button>
          <button onClick={gotoabout}>自己紹介</button>
          <button onClick={gotoskills}>スキル</button>

        </nav>
      </header>

      <main className='text-background'>
        <AnimatePresence mode='wait' initial={true}>
          
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/skills' element={<SkillsPage />} />
          {/* <Route path='/projects' element={<ProjectsPage />} /> */}
          <Route path='/contact' element={<ContactPage />} />

          <Route path='*' element={<section><h2>404 Not Found</h2></section>} />
        </Routes>
        </AnimatePresence>
      </main>

      <footer className='App-footer'>
        
          <p className='text-background'>&copy; 2025 {myname} all rights reserved</p>
        
      </footer>
    </>
  )
}

export default App;
