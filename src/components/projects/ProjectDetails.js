import React from 'react';

const ProjectDetails =(props)=> {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id} </span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, libero eaque? Veritatis voluptates beatae libero eum maiores provident, enim, doloremque corporis repudiandae eaque, magni ipsam animi! Adipisci tenetur numquam expedita.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Foudil REDAOUI</div>
                    <div>5 Nov, 2pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
