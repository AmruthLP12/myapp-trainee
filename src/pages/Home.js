import React from 'react'
import Navbar from '../components/Navbar'
// import image from "../assests/plant-8297610_1280.jpg"
import { Link } from 'react-router-dom'
// import "../styles/Home.css"

const Home = () => {
  return (
    <div className='bgcolor'>
        <Navbar/>
      <h1>Home</h1>
      {/* <img src={image} alt="plant" /> */}
      <Link to='/Content'>Content</Link>
      <br />
      <Link to='/form'>Form</Link>
      <br />
      <Link to='/counter'>Counter</Link>
      <br />
      <Link to='/map'>map</Link>
      <br />
      <Link to='/counter'>Counter</Link>
      <br />
      <Link to='/counter'>Counter</Link>
      <br />
      <Link to='/search'>Search</Link>
      <br />
      <Link to='/MultiStepHookForm'>MultiStepHookForm</Link>
      <br />
      <Link to='/MultiStepFinalForm'>MultiStepFinalForm</Link>
      <br />
      <Link to='/FormikMulti'>FormikMulti</Link>
      <br />
      <Link to='/SearchWithDate'>SearchWithDate</Link>
      <br />
      <Link to='/SearchWithDateRangeAndBar'>SearchWithDateRangeAndBar</Link>
      <br />
      <Link to='/SearchWithDateAndBar'>SearchWithDateAndBar</Link>
      <br />
      <Link to='/SearchWithDateRange'>SearchWithDateRange</Link>
      <br />
      <Link to='/FileUpload'>FileUpload</Link>
      <br />
      <Link to='/DraggableComponent'>DraggableComponent</Link>
      <br />
      <Link to='/DatePickerComponent'>DatePickerComponent</Link>
      <br />
      <Link to='/MySelectComponent'>MySelectComponent</Link>
      <br />
      <Link to='/MyTableComponent'>MyTableComponent</Link>
      <br />      <Link to='/MyTypeaheadComponent'>MyTypeaheadComponent</Link>
      <br />      <Link to='/ProductFilter'>ProductFilter</Link>
      <br />      <Link to='/RegistrationPage'>RegistrationPage</Link>
      <br />      <Link to='/MailWIthHtml'>MailWIthHtml</Link>
      <br />      <Link to='/FormMERN'>FormMERN</Link>
      <br />      <Link to='/LoginMERN'>LoginMERN</Link>
      <br />      <Link to='/FormDataMERN'>FormDataMERN</Link>
      <br />      <Link to='/ImageGalleryPage'>ImageGalleryPage</Link>


<br /><br />
      <br />      <Link to='/PDFViewer'>PDFViewer</Link>
    </div>
  )
}

export default Home
