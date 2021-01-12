import ContactCard from './ContactCard'
import React, { Component } from 'react'
import './App.css';

function App() {
  return (
    <div>
      <ContactCard name="John Doe" email="john.doe@example.com" mobile="1234567890" work="1112223333"/><br />
      <ContactCard name="Jane Smith" email="jane.smith@example.com" mobile="5748372844" work="4567328765"/><br />
      <ContactCard name="Sam Green" email="sam.green@example.com" mobile="1232133987" work="6789786000"/>
    </div>
  );
}

export default App;
