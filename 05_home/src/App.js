import Menu from './components/Menu';
import Home from './components/Home'
import Artist from './components/Artist'
import Collection from './components/picture/Collection'
import Popular from './components/picture/Popular'
import PictureLayout from './components/picture/PictureLayout'
import Picture from './components/picture/Picture'
import AddPicture from './components/picture/AddPicture'
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
            <Route path="/popular" element={<Popular/>} />
            <Route path='pictures' element={<PictureLayout/>}>
              <Route index element={<Collection />} />
              <Route path=":id" element={<Picture/>} />
              <Route path="add-pic" element={<AddPicture/>}/>
          </Route>
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App;
