import './App.scss';
import React,{Component} from 'react';
import Navbar from './components/Navabar';
import Hero from './components/Hero';
import Usage from './components/Usage'; 
import About from './components/About';
import Footer from './components/Footer';
export default class App extends Component {
  componentDidMount(){
    let cursor = window.document.querySelector('.cursor');
    let pointer = window.document.querySelector('.pointer');
    window.document.addEventListener('mousemove',e=>{
      // console.log(e.pageY,e.pageX)
      cursor.setAttribute('style',`top:${e.pageY-25}px;left:${e.pageX-25}px`);
      pointer.setAttribute('style',`top:${e.pageY-2.5}px;left:${e.pageX-2.5}px`);
    })
  }
  render(){
    return (
      <>
      <div className="max-width bg-dark" id="desktop">
        <Navbar />
        <Hero />
        <Usage />
        <About />
      </div>
      <div className="max-width pos-rel">
        <Footer />
      </div>
      <span className="cursor"></span>
      <span className="pointer"></span>
      </>
    );
  }
}
