//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Gallery from './Gallery';
import Blog from './Blog';
import About from './About';
import { AnimatePresence, motion } from "framer-motion";





export default function App() {
  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;

    fetch(`${API_URL}/api/artworks`)
      .then((res) => res.json())
      .then((data) => {
        setArtworks(data); // 存進 state
      })
      .catch((err) => {
        console.error('Fetch error:', err);
      });
  }, []);
  return (
      
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      
    {/* 導覽列 */}
    <nav className="flex gap-4 p-4">
      <Link to="/gallery">
        <button className="px-4 py-2 border rounded hover:bg-gray-200 transition">Gallery</button>
        
      </Link>
      <Link to="/blog">
        <button className="px-4 py-2 border rounded hover:bg-gray-200 transition">Blog</button>
      </Link>
      <Link to="/about">
        <button className="px-4 py-2 border rounded hover:bg-gray-200 transition">About</button>
      </Link>
      
      
    </nav>
       {/* 頁面內容 */}
    <AnimatePresence mode="wait">
        <Routes>
          <Route
            path="/"
            element={
              <FadeInPage>
                <Gallery />
              </FadeInPage>
            }
          />
          <Route
            path="/gallery"
            element={
              <FadeInPage>
                <Gallery />
              </FadeInPage>
            }
          />
          <Route
            path="/blog"
            element={
              <FadeInPage>
                <Blog />
              </FadeInPage>
            }
          />
          <Route
            path="/about"
            element={
              <FadeInPage>
                <About />
              </FadeInPage>
            }
          />
          <Route
            path="*"
            element={
              <FadeInPage>
                <div className="text-center text-xl">找不到頁面</div>
              </FadeInPage>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
    
  );
}
// 頁面轉場動畫：淡入效果
function FadeInPage({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}


// import React, { useState, useEffect } from 'react';

// function App() {
//   const [artworks, setArtworks] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/artworks')
//       .then((response) => response.json())
//       .then((data) => setArtworks(data));
//   }, []);

//   return (
//     <div className="App">
//       <h1>AI Art Portfolio</h1>
//       <div className="artworks-gallery">
//         {artworks.map((artwork) => (
//           <div key={artwork.id} className="artwork">
//             <img src={artwork.imageUrl} alt={artwork.title} />
//             <h2>{artwork.title}</h2>
//             <p>{artwork.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// function App() {
//   return (
//     <div className="App">
//       <h1>AI Art Portfolio</h1>
//       <p>Welcome to my AI art gallery and blog!</p>
//     </div>
//   );
// }

// export default App;