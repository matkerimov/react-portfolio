import React from 'react';
import image from "./../img/projects/06-big.jpg"
import github from "./../img/icons/gitHub-black.svg";
import BtnGithub from "../components/button-github/BtnGithub";


const ProjectPage = () => {
    return (
        <>
            <main className="section">
                <div className="container">
                    <div className="project-details">

                        <h1 className="title-1">Video service</h1>

                        <img src={image} alt="" className="project-details__cover"/>

                            <div className="project-details__desc">
                                <p>Skills: React, Node.js, MongoDB</p>
                            </div>

                           <BtnGithub link="https://github.com"/>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ProjectPage;