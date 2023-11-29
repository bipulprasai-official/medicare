import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CategoryProvider } from './Context/categoryContext';
import { PatientProvider } from './Context/patientContext';
import { NotesProvider } from './Context/progressNoteContext';
import { FluidProvider } from './Context/fluidContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CategoryProvider>
  <PatientProvider>
  <NotesProvider>
  <FluidProvider>
  <App />
  </FluidProvider>
  
  </NotesProvider>
 
  </PatientProvider>
  </CategoryProvider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
