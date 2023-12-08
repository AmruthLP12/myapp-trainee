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
import MySelectComponent from './pages/MySelectComponent.js';
import MyTableComponent from './pages/MyTableComponent.js';
import MyTypeaheadComponent from './pages/MyTypeaheadComponent.js';
import ProductFilter from './pages/ProductFilter.js';
import RegistrationPage from './pages/RegistrationPage.js';
import ImageGalleryPage from './pages/ImageGalleryPage.js';
import CheckBox from './pages/CheckBox.jsx';
import DisplayCheckedData from './pages/DisplayCheckedData.js';
import PatientBill from './pages/PatientBill.js';
import DigitalClock1 from './pages/DigitalClock1.js';
import DigitalClock from './pages/DigitalClock.js';
import SimpleCarousel from './pages/SimpleCarousel.js';
import ProfileForm from './pages/ProfileForm.js';
import MultipleImagesPage from './pages/MultipleImagesPage.js';


import PageNotFound from './pages/PageNotFound.js';



import PDFViewer from './pages/PDFViewer.js'; // not working 
import MailWIthHtml from './pages/MailWIthHtml.js';
import FormMERN from './pages/FormMERN';
import LoginMERN from './pages/LoginMERN.js';
import FormDataMERN from './pages/FormDataMERN.js';
import EditUser from './pages/EditUser.js';
import RegisterRole from './pages/RegisterRole.js';
import LoginRole from './pages/LoginRole.js';


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
          <Route path='/MySelectComponent' element={<MySelectComponent/>} />
          <Route path='/MyTableComponent' element={<MyTableComponent/>} />
          <Route path='/MyTypeaheadComponent' element={<MyTypeaheadComponent/>} />
          <Route path='/ProductFilter' element={<ProductFilter/>} />
          <Route path='/RegistrationPage' element={<RegistrationPage/>} />
          <Route path='/MailWIthHtml' element={<MailWIthHtml/>} />
          <Route path='/FormMERN' element={<FormMERN/>} />
          <Route path='/LoginMERN' element={<LoginMERN/>} />
          <Route path='/FormDataMERN' element={<FormDataMERN/>} />
          <Route path="/edit-user/:id" element={<EditUser/>} />
          <Route path='/ImageGalleryPage' element={<ImageGalleryPage/>} />
          <Route path='/CheckBox' element={<CheckBox/>} />
          <Route path='/DisplayCheckedData' element={<DisplayCheckedData/>} />
          <Route path='/PatientBill' element={<PatientBill/>} />
          <Route path='/RegisterRole' element={<RegisterRole/>} />
          <Route path='/LoginRole' element={<LoginRole/>} />
          <Route path='/DigitalClock1' element={<DigitalClock1/>} />
          <Route path='/DigitalClock' element={<DigitalClock/>} />
          <Route path='/SimpleCarousel' element={<SimpleCarousel/>} />
          <Route path='/ProfileForm' element={<ProfileForm/>} />
          <Route path='/MultipleImagesPage' element={<MultipleImagesPage/>} />
          <Route path='*' element={<PageNotFound/>} />



          <Route path='/PDFViewer' element={<PDFViewer/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
