import React from 'react';
function Resume() {
  return (
    <section id="resume">
      <h2 className="text-center text-sm-left">Resume</h2>
      <a href={require('../assets/Christopher-Southwick-Web-Developer.pdf').default}>Christopher-Southwick-Web-Developer.pdf</a>
      <iframe src={require('../assets/Christopher-Southwick-Web-Developer.pdf').default} title="Resume"></iframe>
    </section>
  );
}

export default Resume;
