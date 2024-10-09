import Header  from "./Header.jsx"
import Copy from "./Copy.jsx"
import Edu from "./Edu.jsx"
import Footer from "./Footer.jsx"
import About from "./About.jsx"
import Card from "./Card.jsx"
import Skills from "./Skills.jsx"
import Certificate from "./Certificate.jsx"
import Internship from "./Internship.jsx"
import Skillbar from "./Skillbar.jsx"
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.querySelectorAll('.nava').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
      
        // Delay before the scroll (in milliseconds)
        const delay = 1500;

        setTimeout(() => {
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }, delay);
      });
    });


    document.querySelectorAll('.tdnn').forEach(function(element) {
      element.addEventListener('click', function() {
          const body = document.body;
          const moon = document.querySelector('.moon');
          const tdnn = document.querySelector('.tdnn');
  
          if (body.classList.contains('light')) {
              body.classList.remove('light');
              moon.classList.remove('sun');
              tdnn.classList.remove('day');
          } else {
              body.classList.add('light');
              moon.classList.add('sun');
              tdnn.classList.add('day');
          }
      });
  });
  
    function changeLanguage(language) {
      var element = document.getElementById("url");
      element.value = language;
      element.innerHTML = language;
  }
  
  function showDropdown() {
      document.getElementById("myDropdown").classList.toggle("show");
  }
  
    // Set scroll margin for each section
    const sections = document.querySelectorAll('.about');
        sections.forEach(sec => {
            sec.style.scrollMarginTop = '40px';
            
        });
        const se = document.querySelectorAll('.cer');
        se.forEach(sec => {
            sec.style.scrollMarginTop = '60px';
            
        });
        const edu = document.querySelectorAll('.edu');
        edu.forEach(sec => {
            sec.style.scrollMarginTop = '60px';
            
        });
        const s = document.querySelectorAll('.pro');
        s.forEach(sec => {
            sec.style.scrollMarginTop = '10px';
            
        });
        const e = document.querySelectorAll('.skills');
        e.forEach(sec => {
            sec.style.scrollMarginTop = '40px';
            
        });
        const n = document.querySelectorAll('.intern');
        n.forEach(sec => {
            sec.style.scrollMarginTop = '40px';
            
        });
        const scrollProgress = document.getElementById("scroll-progress");
const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
});
    // Optionally, add click listeners for smooth scrolling to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
  }, []); 

  return(
    <>
      <section className="sec" id="sec"><Header/></section>
      <section className="sec" id="sec"><About/> </section>
      <section className="sec" id="sec"><Edu /></section>
      <section className="sec" id="sec"> <Skills /></section>
      <section className="sec" id="sec"><Skillbar /></section>
      <section className="sec" id="sec"><Card/> </section>
      <section className="sec" id="sec"><Certificate /></section>
      <section className="sec" id="sec"><Internship /></section>
      <section className="sec" id="sec"> <Footer/></section>
      <section className="sec" id="sec"> <Copy/></section>   
         
    </>
    
  );
   
}

export default App
