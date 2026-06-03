import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Song1 from './pages/Song1';
import Song2 from './pages/Song2';
import Song3 from './pages/Song3';
import Song4 from './pages/Song4';
import Song5 from './pages/Song5';
import Song6 from './pages/Song6';
import Song7 from './pages/Song7';
import Song8 from './pages/Song8';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/elon-lasers-on-the-abyss" element={<Song1 />} />
          <Route path="/blue-schism-666" element={<Song2 />} />
          <Route path="/skyborn-fool" element={<Song3 />} />
          <Route path="/we-are-divine" element={<Song4 />} />
          <Route path="/broken-and-unblessed" element={<Song5 />} />
          <Route path="/rise-up-from-the-afterglow" element={<Song6 />} />
          <Route path="/commander-of-the-false-dawn" element={<Song7 />} />
          <Route path="/tate-of-decay" element={<Song8 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;