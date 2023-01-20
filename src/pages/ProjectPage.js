import React from 'react';
import BtnGithub from "../components/button-github/BtnGithub";
import { useParams } from "react-router-dom";
import { projects } from "../helpers/projectsList";

const ProjectPage = () => {

    const {id} = useParams()
    const project = projects[id]

    return (
        <>
            <main className="section">
                <div className="container">
                    <div className="project-details">

                        <h1 className="title-1">{project.title}</h1>

                        <img src={project.imgBig} alt={project.title} className="project-details__cover"/>

                            <div className="project-details__desc">
                                <p>{project.skills}</p>
                            </div>
                        {/* если 'project.gitHubLink' присутсвует то тогда мы рендерим кнопку*/}
                        {project.gitHubLink && <BtnGithub link="https://github.com"/> }


                    </div>
                </div>
            </main>
        </>
    );
};

export default ProjectPage;