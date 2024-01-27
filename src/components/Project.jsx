import React from 'react';


function Project(prop) {
    if (prop.id == 1){
        return (
            <>
            <div className="carousel-item active">
                <img src={prop.image} alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{prop.name}</h5>
                        <p>...</p>
                    </div>
            </div>
        </>
        )
    }
    else{
    return (
        <>
            <div className="carousel-item">
                <img src={prop.image} alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{prop.name}</h5>
                        <p>...</p>
                    </div>
            </div>
        </>
    )
    }
}

export default Project