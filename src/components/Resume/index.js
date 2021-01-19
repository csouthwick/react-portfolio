import React from 'react';
function Resume() {
  return (
    <section id="resume">
      <h2 className="text-center text-sm-left">Resume</h2>
      <h3 className="text-center text-sm-left">Front-end Proficiencies</h3>
      <ul>
        <li>HTML5</li>
        <li>CSS</li>
        <li>SASS/SCSS</li>
        <li>JavaScript (ES9+)</li>
        <li>JQuery</li>
        <li>Responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h3 className="text-center text-sm-left">Back-end Proficiencies</h3>
      <ul>
        <li>PHP</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
      <h3 className="text-center text-sm-left">Additional Proficiencies</h3>
      <ul>
        <li>Regular Expressions (regex)</li>
        <li>C/C++</li>
        <li>AviSynth scripting</li>
      </ul>
    </section>
  );
}

export default Resume;
