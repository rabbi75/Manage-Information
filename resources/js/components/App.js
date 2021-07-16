import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Nav from './layouts/Nav';
import AddContact from './pages/AddContact';
import Contact from './pages/Contact';
import EditContact from './pages/EditContact';
// import Home from './pages/Home';

function App() {
    return (
      <>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/add-contact" element={<AddContact />} />
          <Route path="/edit-contact/:id" element={<EditContact />} />
        </Routes>
      </BrowserRouter>
      </>
    );
}


export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}

