import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Content from './pages/Content';
import Form from './pages/form';
import Counter from './pages/Counter';
import Input from './pages/input';
import FormData from './pages/FormData';
import MapFunction from './pages/MapFunction';
import MapFunction1 from './pages/MapFunction1';
import MapFuction2 from './pages/MapFuction2';
import MapFuction3 from './pages/MapFuction3';
import Login from './pages/Login';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Content' element={<Content />} />
          <Route path='/form' element={<Form />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/input' element={<Input />} />
          <Route path='/formdata' element={<FormData />} />
          <Route path='/map' element={<MapFunction />} />
          <Route path='/mapone' element={<MapFunction1 />} />
          <Route path='/maptwo' element={<MapFuction2 />} />
          <Route path='/mapthree' element={<MapFuction3 />} />
          <Route path='/login' element={<Login />} />
          <Route path='/search' element={<Search/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
