import React from 'react';


function Project(prop) {
    <>
        <div className="card bg-dark text-white">
            <img className="card-img" src="..." alt="Card image" />
            <div className="card-img-overlay">
                <h5 className="card-title">{prop.name}</h5>
                <p className="card-text">{prop.description}</p>
                <p className="card-text">Last updated 3 mins ago</p>
            </div>
        </div>
    </>
}

export default Project