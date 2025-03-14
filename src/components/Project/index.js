import React from 'react';

const Project = ({ project }) => {
  console.log(project);
  return (
    <div className="card col-md-6 border-0 mb-4">
      <img
        className="card-img-top"
        src={require(`../../assets/images/${project.image}`)}
        alt={project.name}
        key={project.name}
      />
      <div className="card-body">
        <h3 className="card-title">
          <a href={project.github}>{project.name}</a>
        </h3>
      </div>
    </div>
  );
};

export default Project;
