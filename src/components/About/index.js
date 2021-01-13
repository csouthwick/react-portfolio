import React from 'react';
import photo from '../../assets/images/photo.jpg';
function About() {
  return (
    <section id="about-me">
      <h2 className="text-center text-sm-left">About Me</h2>
      <img src={photo} className="d-block mx-auto mr-sm-2 float-sm-left" alt="Chris Southwick" />
      <div className="my-2">
        <p>As a web developer with over five years of experience, I initially dipped my toes into web development during a project course at UMass Lowell while earning my bachelor's degree in computer science. I was instantly hooked and sought to create a new website for <a href="http://gctv.georgetownma.gov/">Georgetown Community Television</a>, learning PHP and SOAP along the way to interface with their database and scheduling server. As a result of this work, <a href="http://tightrope.townofrowley.org/RCM/">Rowley Community Media</a> brought me on to create a website for them from the same codebase with tweaks for their branding. Both sites are currently undergoing a major transition from the old SOAP API to a RESTful API thanks to new video servers with enhanced capabilities that include Video On Demand and live streaming.</p>

        <p>Some hobby projects are also included here, mainly small utility pages for working with <a href="http://avisynth.nl/">AviSynth</a> scripts and creating chapter files for mp4 videos. More recent projects are being added from UCF's Coding Boot Camp to stay up to date on current coding technologies and best practices.</p>
      </div>
    </section>
  );
}

export default About;
