
import React,{lazy,Suspense} from 'react';
import './App.css';
const Header = lazy(()=> import ("./Header"));
const About = lazy(()=> import ("./About"));
const Pets = lazy(()=> import ("./Pets"));
const Help = lazy(()=> import ("./Help"));
const Donation = lazy(()=> import ("./Donation"));
const Contact = lazy(()=> import ("./Contact"));

/* import Header from "./Header";
import About from './About';
import Pets from './Pets';
import Help from './Help';
import Donation from "./Donation";
import Contact from  "./Contact" */

const styles = {
  fontSize:"60px",
  color:"grey",
  textAlign:"center",
  lineHeight:"100vh"
}

function App() {
  
  return (
    <>
    <Suspense fallback={<div style={styles}>Loading....</div>}>
    <Header />
    <About />
    <Pets />
    <Help />
    <Donation />
    <Contact />
    </Suspense>
    </>
    
  );
}

export default App;
