import React from 'react';
import photo from '../assets/images/photo.jpg';
function About() {
  return (
    <section id="about-me">
      <h2 className="text-center text-sm-left">About Me</h2>
      <img src={photo} className="d-block mx-auto mr-sm-2 float-sm-left" alt="Chris Southwick" />
      <div className="my-2">
        <p>Full stack web developer with a certificate in Web Development from the University of Central Florida and a Bachelor of Science degree in Computer Science from University of Massachusetts - Lowell. Experience in JavaScript, CSS, HTML, Node.js, PHP, and RegEx with additional knowledge in C/C++. Created websites for <a href="http://gctv.georgetownma.gov/">Georgetown Community Television</a> and <a href="http://tightrope.townofrowley.org/RCM/">Rowley Community Media</a> while attending UMass Lowell and currently continuing to provide support and improvements. Recently worked as part of a team of four to create a single page MERN app demonstrating ecommerce functionality and CSS animations. Passionate about combining and transforming data into useful and intuitive views. My technical prowess in web technologies as well as being a quick learner who enjoys puzzling through problems to find creative solutions makes me an excellent addition to any development team.</p>

        <p>Some hobby projects are also included here, mainly small utility pages for working with <a href="http://avisynth.nl/">AviSynth</a> scripts and creating chapter files for mp4 videos. More recent projects are being added from UCF's Coding Boot Camp to stay up to date on current coding technologies and best practices.</p>
      </div>
    </section>
  );
}

export default About;
