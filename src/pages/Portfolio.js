import React, { useState } from 'react';
import Project from '../components/Project';


function Portfolio() {
  const [projects] = useState([
    {
      name: "Web-Buffet",
      github: "https://github.com/JoshCarter8400/web-buffet",
      image: "web-buffet.png"
    },
    {
      name: "Book Search Engine",
      github: "https://github.com/csouthwick/book-search-engine",
      image: "book-search.png"
    },
    {
      name: "Budget Tracker",
      github: "https://github.com/csouthwick/budget-tracker",
      image: "budget-tracker.png"
    },
    {
      name: "Tech Blog",
      github: "https://github.com/csouthwick/tech-blog",
      image: "the-tech-blog.png"
    },
    {
      name: "Note Taker",
      github: "https://github.com/csouthwick/note-taker",
      image: "Note_Taker.png"
    },
    {
      name: "Weather Dashboard",
      github: "https://github.com/csouthwick/weather-dashboard",
      image: "Weather_Dashboard.png"
    },
    {
      name: "Work Day Scheduler",
      github: "https://github.com/csouthwick/work-day-scheduler",
      image: "Work_Day_Scheduler.png"
    }
  ]);

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="row">
        {projects.map((project, i) => (
          <Project project={project} key={i}></Project>
        ))}
      </div>
    </section>
  );
}
export default Portfolio;
