import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0 project-summary">
        <div className="card-content">
          <span className="card-title">{id} - Project Title</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
            voluptatem tenetur at et suscipit, rem ut officiis delectus,
            voluptate expedita unde. Omnis, magni? Vero earum, delectus minus
            architecto veniam atque!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Danny</div>
          <div>Time</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
