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
import Pre from './pages/Pre';
import SearchWithDate from './pages/SearchWithDate';
import SearchWithDateAndBar from './pages/SearchWithDateAndBar';
import SearchWithDateRangeAndBar from './pages/SearchWithDateRangeAndBar';
import SearchWithDateRange from './pages/SearchWithDateRange';
import FormikMulti from './pages/FormikMulti';
import MultiStepFinalForm from './pages/MultiStepFinalForm';
import MultiStepHookForm from './pages/MultiStepHookForm';
import FileUpload from './pages/FileUpload';
import DraggableComponent from './pages/DraggableComponent.js';
import DatePickerComponent from './pages/DatePickerComponent.js';


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
          <Route path='/pre' element={<Pre/>} />
          <Route path='/SearchWithDate' element={<SearchWithDate/>} />
          <Route path='/SearchWithDateAndBar' element={<SearchWithDateAndBar/>} />
          <Route path='/SearchWithDateRangeAndBar' element={<SearchWithDateRangeAndBar/>} />
          <Route path='/SearchWithDateRange' element={<SearchWithDateRange/>} />
          <Route path='/FormikMulti' element={<FormikMulti/>} />
          <Route path='/MultiStepFinalForm' element={<MultiStepFinalForm/>} />
          <Route path='/MultiStepHookForm' element={<MultiStepHookForm/>} />
          <Route path='/FileUpload' element={<FileUpload/>} />
          <Route path='/DraggableComponent' element={<DraggableComponent/>} />
          <Route path='/DatePickerComponent' element={<DatePickerComponent/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
