import Menu from './components/Menu';
import Home from './components/Home'
import Artist from './components/Artist'
import Collection from './components/Collection'
import Popular from './components/Popular'
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
function App() {
  return(
    <div className='App'>
      <header className='header'>
        <Menu/>
      </header>
      <div className='main-context'>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/artist" element={<Artist/>} />
            <Route path="/collection" element={<Collection/>} />
            <Route path="/popular" element={<Popular/>} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App;
